import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import ClientHome from './pages/ClientHome.jsx';
import ClientBookings from './pages/ClientBookings.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminBookings from './pages/AdminBookings.jsx';
import AdminLogin from './components/AdminLogin.jsx';
import AdminRegister from './components/AdminRegister.jsx';

const App = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminAccounts, setAdminAccounts] = useState([
    { businessName: 'Default Business', email: 'admin@example.com', password: 'admin123' }, // Initial admin account
  ]);
  const [currentBusinessName, setCurrentBusinessName] = useState(''); // Track logged-in business name

  const handleBook = (slotId, clientInfo) => {
    setAvailableSlots(
      availableSlots.map((slot) =>
        slot.id === slotId ? { ...slot, booked: true } : slot
      )
    );
    setBookings([...bookings, { id: slotId, ...clientInfo, time: availableSlots.find((s) => s.id === slotId).time, date: availableSlots.find((s) => s.id === slotId).date, clientId: 'client1' }]);
  };

  const handleCancel = (slotId) => {
    setAvailableSlots(
      availableSlots.map((slot) =>
        slot.id === slotId ? { ...slot, booked: false } : slot
      )
    );
    setBookings(bookings.filter((booking) => booking.id !== slotId));
  };

  const handleAdminLogin = (businessName, email, password) => {
    const admin = adminAccounts.find(
      (account) => account.businessName === businessName && account.email === email && account.password === password
    );
    if (admin) {
      setIsAdminLoggedIn(true);
      setCurrentBusinessName(admin.businessName); // Store business name for header
      return true;
    }
    return false;
  };

  const handleAdminRegister = (businessName, email, password) => {
    if (adminAccounts.some((account) => account.businessName === businessName || account.email === email)) {
      return false; // Business name or email exists
    }
    setAdminAccounts([...adminAccounts, { businessName, email, password }]);
    return true;
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentBusinessName(''); // Clear business name on logout
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header isAdminLoggedIn={isAdminLoggedIn} onLogout={handleAdminLogout} businessName={currentBusinessName} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                isAdminLoggedIn ? (
                  <Navigate to="/admin" />
                ) : (
                  <ClientHome availableSlots={availableSlots} onBook={handleBook} />
                )
              }
            />
            <Route path="/client/bookings" element={<ClientBookings bookings={bookings} />} />
            <Route
              path="/admin"
              element={
                isAdminLoggedIn ? (
                  <AdminDashboard availableSlots={availableSlots} bookings={bookings} setAvailableSlots={setAvailableSlots} onCancel={handleCancel} />
                ) : (
                  <Navigate to="/admin/login" />
                )
              }
            />
            <Route
              path="/admin/bookings"
              element={
                isAdminLoggedIn ? (
                  <AdminBookings bookings={bookings} onCancel={handleCancel} />
                ) : (
                  <Navigate to="/admin/login" />
                )
              }
            />
            <Route path="/admin/login" element={<AdminLogin onLogin={handleAdminLogin} />} />
            <Route path="/admin/register" element={<AdminRegister onRegister={handleAdminRegister} />} />
            <Route path="*" element={<Navigate to={isAdminLoggedIn ? "/admin" : "/"} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
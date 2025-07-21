import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import ClientHome from './pages/ClientHome.jsx';
import ClientBookings from './pages/ClientBookings.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminLogin from './components/AdminLogin.jsx';

const App = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

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

  const handleAdminLogin = (password) => {
    if (password === 'admin123') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header isAdminLoggedIn={isAdminLoggedIn} onLogout={handleAdminLogout} />
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
            <Route path="/admin/login" element={<AdminLogin onLogin={handleAdminLogin} />} />
            <Route path="*" element={<Navigate to={isAdminLoggedIn ? "/admin" : "/"} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
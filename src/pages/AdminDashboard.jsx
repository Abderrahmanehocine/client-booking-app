import React from 'react';
import BookingsList from '../components/BookingsList.jsx';
import SlotManager from '../components/SlotManager.jsx';

const AdminDashboard = ({ availableSlots, bookings, setAvailableSlots, onCancel }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Slots</h2>
        <SlotManager availableSlots={availableSlots} setAvailableSlots={setAvailableSlots} />
      </div>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bookings</h2>
        <BookingsList bookings={bookings} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default AdminDashboard;
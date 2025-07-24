import React from 'react';
import BookingsList from '../components/BookingsList.jsx';

const AdminBookings = ({ bookings, onCancel }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Bookings</h1>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <BookingsList bookings={bookings} onCancel={onCancel} />
      </div>
    </div>
  );
};

export default AdminBookings;
import React from 'react';
import BookingForm from '../components/BookingForm.jsx';

const ClientHome = ({ availableSlots, onBook }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Book Your Appointment</h1>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Slots</h2>
        <BookingForm availableSlots={availableSlots} onBook={onBook} />
      </div>
    </div>
  );
};

export default ClientHome;
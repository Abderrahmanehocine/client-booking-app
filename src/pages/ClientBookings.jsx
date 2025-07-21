import React from 'react';
import BookingsList from '../components/BookingsList.jsx';

const ClientBookings = ({ bookings }) => {
  // Mock clientId for learning purposes (replace with backend auth later)
  const mockClientId = 'client1'; // Simulating a logged-in client
  const clientBookings = bookings.filter((booking) => booking.clientId === mockClientId);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Bookings</h1>
      <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <BookingsList bookings={clientBookings} />
      </div>
    </div>
  );
};

export default ClientBookings;
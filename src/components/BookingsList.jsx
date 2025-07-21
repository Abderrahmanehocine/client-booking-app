import React from 'react';

const BookingsList = ({ bookings, onCancel }) => {
  return (
    <div>
      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings yet.</p>
      ) : (
        <ul className="space-y-2">
          {bookings.map((booking) => (
            <li
              key={booking.id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
            >
              <div>
                <span className="font-medium">{booking.firstName} {booking.lastName}</span> - {booking.date} {booking.time} {booking.phone && `(Phone: ${booking.phone})`} {booking.email && `(Email: ${booking.email})`}
              </div>
              {onCancel && (
                <button
                  onClick={() => onCancel(booking.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Cancel
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingsList;
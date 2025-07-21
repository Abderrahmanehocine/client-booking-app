import React, { useState } from 'react';

const BookingForm = ({ availableSlots, onBook }) => {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSlot && firstName && lastName && phone) {
      onBook(Number(selectedSlot), { firstName, lastName, phone, email, clientId: 'client1' });
      setSelectedSlot('');
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Time Slot</label>
        <select
          value={selectedSlot}
          onChange={(e) => setSelectedSlot(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select a time slot</option>
          {availableSlots
            .filter((slot) => !slot.booked)
            .map((slot) => (
              <option key={slot.id} value={slot.id}>
                {slot.date} {slot.time}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your phone number"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email (Optional)</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter your email (optional)"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!selectedSlot || !firstName || !lastName || !phone}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookingForm;
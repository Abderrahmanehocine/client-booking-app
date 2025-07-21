import React, { useState } from 'react';

const SlotManager = ({ availableSlots, setAvailableSlots }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [editSlotId, setEditSlotId] = useState(null);

  const handleAddSlot = (e) => {
    e.preventDefault();
    if (date && time) {
      const newSlot = {
        id: availableSlots.length ? availableSlots[availableSlots.length - 1].id + 1 : 1,
        date,
        time,
        booked: false,
      };
      setAvailableSlots([...availableSlots, newSlot]);
      setDate('');
      setTime('');
    }
  };

  const handleEditSlot = (slot) => {
    setEditSlotId(slot.id);
    setDate(slot.date);
    setTime(slot.time);
  };

  const handleUpdateSlot = (e) => {
    e.preventDefault();
    if (date && time) {
      setAvailableSlots(
        availableSlots.map((slot) =>
          slot.id === editSlotId ? { ...slot, date, time } : slot
        )
      );
      setEditSlotId(null);
      setDate('');
      setTime('');
    }
  };

  const handleDeleteSlot = (slotId) => {
    if (!availableSlots.find((slot) => slot.id === slotId).booked) {
      setAvailableSlots(availableSlots.filter((slot) => slot.id !== slotId));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          {editSlotId ? 'Edit Slot' : 'Add New Slot'}
        </h3>
        <form onSubmit={editSlotId ? handleUpdateSlot : handleAddSlot} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            disabled={!date || !time}
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 disabled:bg-gray-400"
          >
            {editSlotId ? 'Update Slot' : 'Add Slot'}
          </button>
          {editSlotId && (
            <button
              type="button"
              onClick={() => {
                setEditSlotId(null);
                setDate('');
                setTime('');
              }}
              className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Available Slots</h3>
        {availableSlots.length === 0 ? (
          <p className="text-gray-600">No slots available.</p>
        ) : (
          <ul className="space-y-2">
            {availableSlots.map((slot) => (
              <li
                key={slot.id}
                className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
              >
                <span>
                  {slot.date} {slot.time} {slot.booked && '(Booked)'}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEditSlot(slot)}
                    disabled={slot.booked}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSlot(slot.id)}
                    disabled={slot.booked}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 disabled:bg-gray-400"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SlotManager;
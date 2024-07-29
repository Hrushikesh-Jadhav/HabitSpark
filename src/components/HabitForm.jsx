import React, { useState } from 'react';
import axios from 'axios';

const HabitForm = ({ fetchHabits }) => {
  const [habit, setHabit] = useState({ name: '', time: '', repeatDays: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabit({ ...habit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/habits', habit);
    fetchHabits();
    setHabit({ name: '', time: '', repeatDays: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white-700">Habit Name</label>
        <input
          type="text"
          name="name"
          value={habit.name}
          onChange={handleChange}
          className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white-700">Time</label>
        <input
          type="time"
          name="time"
          value={habit.time}
          onChange={handleChange}
          className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white-700">Repeat Days ( Optional )</label>
        <input
          type="number"
          name="repeatDays"
          value={habit.repeatDays}
          onChange={handleChange}
          className="mt-1 block text-black w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Add Habit</button>
    </form>
  );
};

export default HabitForm;
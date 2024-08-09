import React from 'react';
import axios from 'axios';

const HabitList = ({ habits, fetchHabits }) => {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/habits/${id}`);
    fetchHabits();
  };

  const handleToggleComplete = async (id, completed) => {
    await axios.put(`http://localhost:5000/habits/${id}`, { completed: !completed });
    fetchHabits();
  };

  return (
    <div className="space-y-4">
      {habits.map(habit => (
        <div key={habit._id} className="flex items-center justify-between p-4 mt-10 border border-gray-300 rounded-md">
          <div>
            <p className="text-lg font-semibold">{habit.name}</p>
            <p className="text-sm text-gray-500">Time: {habit.time}</p>
            <p className="text-sm text-gray-500">Repeat Days: {habit.repeatDays}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleToggleComplete(habit._id, habit.completed)}
              className={`p-2 rounded-md ${habit.completed ? 'bg-green-600 text-white' : 'text-black bg-gray-200'}`}
            >
              {habit.completed ? 'Completed' : 'Mark as Done'}
            </button>
            <button
              onClick={() => handleDelete(habit._id)}
              className="p-2 bg-red-600 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HabitList;

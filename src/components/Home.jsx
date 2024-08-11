import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitForm from './HabitForm';
import HabitList from './HabitList';
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Home = () => {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const response = await axios.get('http://localhost:5000/habits');
    setHabits(response.data);
  };

  const archiveCompletedHabits = async () => {
    await axios.post('http://localhost:5000/habits/archive');
    fetchHabits();
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className='bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] w-full h-screen'>
      <Sidebar/>
        <Navbar/>
        <div className="pt-10 pb-36 bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] xl:pl-64 pl-10 justify-center items-center">
            <div className="bg-[#081b29] max-w-xl mx-auto mt-10 text-white p-8 rounded-md shadow-md">
              <h1 className="text-2xl text-white font-bold mb-4">Create Your Habits:</h1>
              <HabitForm fetchHabits={fetchHabits} />
              {habits.length > 0 ? (
          <HabitList habits={habits} fetchHabits={fetchHabits} />
        ) : (
          <p>No habits to display</p>
        )}
        <button
          onClick={archiveCompletedHabits}
          className="w-full bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4"
        >
          Archive Completed Habits
        </button>
            </div>
        </div>
    </div>  
  );
};

export default Home

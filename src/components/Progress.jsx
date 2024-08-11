import Sidebar from './Sidebar'
import Navbar3 from './Navbar3'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitForm from './HabitForm';
import HabitList from './HabitList';
import DailyChart from './DailyChart';
import WeeklyChart from './WeeklyChart';
import MonthlyChart from './MonthlyChart';

const Progress = () => {
  const [habits, setHabits] = useState([]); // Initialize as an empty array

  const fetchHabits = async () => {
    const response = await axios.get('http://localhost:5000/habits');
    setHabits(response.data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="background">
      <Sidebar/>
        <Navbar3/>
        <div className="bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] grid grid-cols-1 gap-2 xl:pl-96">
          <DailyChart />
          <WeeklyChart />
          <MonthlyChart />
        </div>  
    </div>
  );
};

export default Progress;
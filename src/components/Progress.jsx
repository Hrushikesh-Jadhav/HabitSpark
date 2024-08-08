// import React from 'react'
import Sidebar from './Sidebar'
import Navbar3 from './Navbar3'
// import { Chart as ChartJS } from 'chart.js/auto'
// import { Bar, Doughnut, Line } from 'react-chartjs-2'
// import { Label } from 'recharts'

// import sourceData from "./sourceData.json"

// function Progress() {
//   return (
//     <div class="bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] h-full w-full">
//       <Sidebar/>
//         <Navbar3/>
//           <div class="h-full w-full flex flex-col pl-60 justify-center items-center">
//           <h1 class="bg-black rounded-3xl mt-10 text-xl text-white py-2 px-40">DAILY HABITS :</h1>
//             <div class="bg-white rounded-3xl p-5 h-1/2 w-1/2 mt-5 mb-20">
//               <Doughnut
//                 data={{
//                   labels: sourceData.map((data) => data.label),
//                   datasets: [
//                     {
//                       label: "Daily Progress",
//                       data: sourceData.map((data) => data.value),
//                     },
//                   ],
//                 }}
//               />
//             </div>
//             <h1 class="bg-black rounded-3xl mt-10 text-xl text-white py-2 px-40">WEEKLY HABITS :</h1>
//             <div class="bg-white rounded-3xl p-4 h-1/2 w-1/2 mt-5 mb-20">
//             <Bar
//                 data={{
//                   labels: sourceData.map((data) => data.label),
//                   datasets: [
//                     {
//                       label: "Daily Progress",
//                       data: sourceData.map((data) => data.value),
//                     },
//                   ],
//                 }}
//               />
//             </div>
//             <h1 class="bg-black rounded-3xl mt-10 text-xl text-white py-2 px-40">MONTHLY HABITS :</h1>
//             <div class="bg-white rounded-3xl p-4 h-1/2 w-1/2 mt-5 mb-20">
//             <Line
//                 data={{
//                   labels: sourceData.map((data) => data.label),
//                   datasets: [
//                     {
//                       label: "Daily Progress",
//                       data: sourceData.map((data) => data.value),
//                     },
//                   ],
//                 }}
//               />
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Progress

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitForm from './HabitForm';
import HabitList from './HabitList';
import DailyChart from './DailyChart';
import WeeklyChart from './WeeklyChart';
import MonthlyChart from './MonthlyChart';

// const App = () => {
//   const [habits, setHabits] = useState([]);

//   const fetchHabits = async () => {
//     const response = await axios.get('http://localhost:5000/habits');
//     setHabits(response.data);
//   };

//   useEffect(() => {
//     fetchHabits();
//   }, []);
const App = () => {
  const [habits, setHabits] = useState([]); // Initialize as an empty array

  const fetchHabits = async () => {
    const response = await axios.get('http://localhost:5000/habits');
    setHabits(response.data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] h-full w-full">
      <Sidebar/>
        <Navbar3/>
        <div className="h-full w-full flex flex-col pl-60 justify-center items-center">
          <DailyChart />
          <WeeklyChart />
          <MonthlyChart />
        </div>  
    </div>
  );
};

export default App;
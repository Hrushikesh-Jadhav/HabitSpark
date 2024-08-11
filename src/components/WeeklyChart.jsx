import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const WeeklyChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/habits/completed/weekly');

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        setData({
          labels: days,
          datasets: [
            {
              label: 'Completed Habits',
              data: response.data,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching weekly habit data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-3xl w-fit ml-10 flex flex-col mt-20 p-8 xl:w-3/5 xl:ml-36">
      <h2 className="text-xl font-semibold mb-4">Weekly Completed Habits</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeeklyChart;

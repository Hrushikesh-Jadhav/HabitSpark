import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(BarElement, CategoryScale, LinearScale);

const WeeklyChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/habits/completed/weekly');
      setData({
        labels: ['Completed Habits'],
        datasets: [
          {
            label: 'Weekly Completed Habits',
            data: [response.data.count],
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      });
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-3xl p-4 h-1/2 w-1/2 mt-5 mb-20">
      <h2 className="text-xl font-semibold mb-4">Weekly Completed Habits</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeeklyChart;
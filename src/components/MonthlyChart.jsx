import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/habits/completed/monthly');

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        setData({
          labels: months,
          datasets: [
            {
              label: 'Completed Habits',
              data: response.data,
              fill: false,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1
            }
          ]
        });
      } catch (error) {
        console.error('Error fetching monthly habit data:', error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-3xl p-4 h-1/2 w-1/2 my-20">
      <h2 className="text-xl font-semibold mb-4">Monthly Completed Habits</h2>
      <Line data={data} />
    </div>
  );
};

export default MonthlyChart;
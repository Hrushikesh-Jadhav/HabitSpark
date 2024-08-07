// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Chart.register(BarElement, CategoryScale, LinearScale);

// const MonthlyChart = () => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('http://localhost:5000/habits/completed/monthly');
//       setData({
//         labels: ['Completed Habits'],
//         datasets: [
//           {
//             label: 'Monthly Completed Habits',
//             data: [response.data.count],
//             backgroundColor: 'rgba(255, 159, 64, 0.6)',
//           },
//         ],
//       });
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="w-full max-w-md mx-auto mt-8">
//       <h2 className="text-xl font-semibold mb-4">Monthly Completed Habits</h2>
//       <Bar data={data} />
//     </div>
//   );
// };

// export default MonthlyChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

const MonthlyChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/habits/completed/monthly');
      setData({
        labels: ['Completed Habits'],
        datasets: [
          {
            label: 'Monthly Completed Habits',
            data: [response.data.count],
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
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
      <h2 className="text-xl font-semibold mb-4">Monthly Completed Habits</h2>
      <Bar data={data} />
    </div>
  );
};

export default MonthlyChart;

import React from 'react'
import Sidebar from './Sidebar'
import Navbar3 from './Navbar3'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import { Label } from 'recharts'

function Progress() {
  return (
    <div class="bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] h-full w-full">
      <Sidebar/>
        <Navbar3/>
          <div class="bg-white h-1/2 w-1/2 mt-20 ">
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Daily Progress",
                    data: [10,80,50,20],
                  },
                ],
              }}
            />
          </div>
          <div class="bg-white h-1/2 w-1/2 ml-96 mt-20 mb-20">
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Weekly Progress",
                    data: [10],
                  },
                ],
              }}
            />
          </div>
    </div>
  )
}

export default Progress
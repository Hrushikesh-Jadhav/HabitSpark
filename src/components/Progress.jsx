import React from 'react'
import Sidebar from './Sidebar'
import Navbar3 from '../Navbar3'
import { Chart as ChartJS } from 'chart.js/auto'

function Progress() {
  return (
    <div className='background'>
      <Sidebar/>
        <Navbar3/>
    </div>
  )
}

export default Progress
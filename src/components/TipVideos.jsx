import React from 'react'
import Navbar2 from './Navbar2'
import Sidebar from './Sidebar'
import Videos from './Videos';

const videos = [
  { id: 'Wcs2PFz5q6g', title: 'The Science of Making & Breaking Habits' },
  { id: '75d_29QWELk', title: 'Change Your Life- One Tiny Step at a Time' },
  { id: 'bOR41Nh4F8E', title: 'Full Habits Guide: How to Make Good Habits' },
  { id: 'PZ7lDrwYdZc', title: 'How to become better at anything | Atomic habits' },
  { id: 'Tuw8hxrFBH8', title: 'One of the Greatest Speeches Ever | Steve Jobs' },
  { id: 'nQwKKCqkJxg', title: '30-Minute Yoga for Beginners | Daily Fitness' },
  { id: 'cbKkB3POqaY', title: '25-Min Full Body Exercise for Beginners' }
];

function TipVideos({ video }) {
  return (
    <div className='background'>
      <Sidebar/>
        <Navbar2/>
        <div className="bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] flex justify-center items-center">
          <Videos videos={videos} />
        </div>
    </div>
  )
}

export default TipVideos
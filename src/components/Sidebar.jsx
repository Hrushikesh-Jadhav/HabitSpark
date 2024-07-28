import React, { useState, useEffect } from 'react';
import { FaHome, FaVideo, FaChartBar, FaBackspace } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const getActiveClass = (path) => {
    return activePath === path ? 'bg-blue-600 text-white' : '';
  };

  return (
    <div className='bg-[#081b29] text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
      <h1 className='text-2xl text-white font-medium hidden md:block mt-4 text-center'>Habit-Spark</h1>
      <ul className='flex flex-col mt-5 text-white text-xl'>
        <li
          className={`flex items-center mb-2 py-3 px-2 space-x-4 rounded cursor-pointer hover:bg-blue-600 hover:text-white ${getActiveClass('/')}`}
          onClick={() => handleNavigation('/')}
        >
          <FaHome />
          <span className='hidden md:inline'>Home</span>
        </li>
        <li
          className={`flex items-center mb-2 py-3 px-2 space-x-4 rounded cursor-pointer hover:bg-blue-600 hover:text-white ${getActiveClass('/tipvideos')}`}
          onClick={() => handleNavigation('/tipvideos')}
        >
          <FaVideo />
          <span className='hidden md:inline'>Tips/Videos</span>
        </li>
        <li
          className={`flex items-center py-3 px-2 space-x-4 rounded cursor-pointer hover:bg-blue-600 hover:text-white ${getActiveClass('/progress')}`}
          onClick={() => handleNavigation('/progress')}
        >
          <FaChartBar />
          <span className='hidden md:inline'>Progress</span>
        </li>
        <li
          className='flex mt-80 items-center py-3 px-2 space-x-4 rounded cursor-pointer hover:bg-red-600 hover:text-white'
          onClick={() => handleNavigation('/')}
        >
          <FaBackspace />
          <span className='hidden md:inline'>LogOut</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar
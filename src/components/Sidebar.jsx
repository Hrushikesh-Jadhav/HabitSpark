import React from 'react'
import { FaBackspace, FaChartBar, FaClosedCaptioning, FaDoorClosed, FaDoorOpen, FaExpeditedssl, FaHome, FaLongArrowAltUp, FaTachometerAlt, FaViadeo, FaVideo, FaWindowClose } from 'react-icons/fa'
import { FaBarsProgress, FaFolderClosed } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
const navigate=useNavigate();
  return (
    <div className='bg-[#081b29] text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300'>
        <h1 className='text-2xl text-white font-medium hidden md:block mt-4 text-center'>Habit-Spark</h1>
        <ul className='flex flex-col mt-5 text-white text-xl'>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white' onClick={()=>{navigate("/")}}>
                <FaHome />
                <span className='hidden md:inline'>Home</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white' onClick={()=>{navigate("/tipvideos")}}>
                <FaVideo/>
                <span className='hidden md:inline'>Tips/Videos</span>
            </li>
            <li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white' onClick={()=>{navigate("/progress")}}>
                <FaChartBar />
                <span className='hidden md:inline'>Progress</span>
            </li>
            <li className='flex mt-96 items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-red-600 hover:text-white' onClick={()=>{navigate("/")}}>
                <FaBackspace />
                <span className='hidden md:inline'>LogOut</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar
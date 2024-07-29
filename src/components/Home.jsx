
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HabitForm from './HabitForm';
import HabitList from './HabitList';
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Home = () => {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    const response = await axios.get('http://localhost:5000/habits');
    setHabits(response.data);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className='bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] w-full h-screen'>
      <Sidebar/>
        <Navbar/>
        <div class="pt-10 pb-36 bg-[linear-gradient(-45deg,#081b29_0%,#0ef_100%)] pl-60 justify-center items-center">
            <div className="bg-[#081b29] max-w-xl mx-auto mt-10 text-white p-8 rounded-md shadow-md">
              <h1 className="text-2xl text-white font-bold mb-4">Create Your Habits:</h1>
              <HabitForm fetchHabits={fetchHabits} />
              <HabitList habits={habits} fetchHabits={fetchHabits} />
            </div>
        </div>
    </div>  
  );
};

export default Home

// function Home() {
//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     axios.get('http://localhost:3001/get')
//     .then(result => setTodos(result.data))
//     .catch(err => console.log(err))
//   },[])

//   const handleEdit = (id) =>{
//     axios.put('http://localhost:3001/update/'+id)
//     .then(result => {
//       location.reload()
//     })
//     .catch(err => console.log(err))
//   }

//   const handleDelete = (id) => {
//     axios.delete('http://localhost:3001/delete/'+id)
//     .then(result => {
//       location.reload()
//     })
//     .catch(err => console.log(err))
//   }

//   return (
//     <div className='background'>
//       <Sidebar/>
//         <Navbar/>
//           <div className='home'>
//             <h1>Organise Your Habits</h1>
//             <Create/>
//             {
//               todos.length === 0 
//               ?
//               <div><h2>No Record</h2></div>
//               :
//               todos.map(todo => (
//                 <div className='task'>
//                   <div className='checkbox' onClick={() => handleEdit(todo._id)}>
//                     {todo.done ? 
//                       <BsFillCheckCircleFill className='icons'></BsFillCheckCircleFill>
//                     : <BsCircleFill className='icons'/>
//                     }
//                     <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
//                   </div>
//                   <div>
//                     <span><BsFillTrash3Fill className='icon' onClick={() => handleDelete(todo._id)}/></span>
//                   </div>
//                 </div>   
//               ))
//             }
//           </div>
//     </div>
//   )
// }

// export default Home
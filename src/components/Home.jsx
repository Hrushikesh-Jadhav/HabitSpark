import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Create from './Create'
import axios from 'axios'
import { Bs0CircleFill, BsCCircleFill, BsCircleFill, BsDatabaseFillDown, BsFillCheckCircleFill, BsFillDoorClosedFill, BsFillSignIntersectionSideFill, BsFillTrash2Fill, BsFillTrash3Fill, BsFillTrashFill, BsSignDeadEndFill, BsSignDoNotEnter, BsSignNoParking } from 'react-icons/bs'
import { MdBlindsClosed } from 'react-icons/md'
import Navbar from './Navbar'


function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  },[])

  const handleEdit = (id) =>{
    axios.put('http://localhost:3001/update/'+id)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='background'>
      <Sidebar/>
        <Navbar/>
          <div className='home'>
            <h1>Organise Your Habits</h1>
            <Create/>
            {
              todos.length === 0 
              ?
              <div><h2>No Record</h2></div>
              :
              todos.map(todo => (
                <div className='task'>
                  <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                    {todo.done ? 
                      <BsFillCheckCircleFill className='icons'></BsFillCheckCircleFill>
                    : <BsCircleFill className='icons'/>
                    }
                    <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                  </div>
                  <div>
                    <span><BsFillTrash3Fill className='icon' onClick={() => handleDelete(todo._id)}/></span>
                  </div>
                </div>   
              ))
            }
          </div>
    </div>
  )
}

export default Home
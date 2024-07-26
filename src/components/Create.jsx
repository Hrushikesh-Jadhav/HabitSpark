import React, { useState } from 'react'
import axios from 'axios'
import { Result } from 'postcss'
import { Bs0Circle, BsBadgeAd, BsDatabaseAdd, BsPersonAdd } from 'react-icons/bs'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task:task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
        <input type="text" placeholder="Enter Your Habbits" onChange={(e) => setTask(e.target.value)}/>
        <input type="text" placeholder="Enter Your Habbits" onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
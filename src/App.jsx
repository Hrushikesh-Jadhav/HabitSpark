
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TipVideos from './components/TipVideos'
import Progress from './components/Progress'
import Sidebar from './components/Sidebar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className='flex'>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/tipvideos' exact element={<TipVideos/>}></Route>
          <Route path='/progress' exact element={<Progress/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

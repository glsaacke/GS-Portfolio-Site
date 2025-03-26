import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>

        </main>
      </div>
    </>
  )
}

export default App

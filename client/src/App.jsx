import { useState } from 'react'
import './styles/App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={Home}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App

import React from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'


const App = () => {
  return (
    <>
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={  <Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App

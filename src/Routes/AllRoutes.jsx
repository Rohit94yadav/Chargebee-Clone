
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LearnMore from '../Components/LearnMore'
import Home from './Home'
import JobPage from './JobPage'
import JobView from './JobView'
import Login from './Login'
import Register from './Register'


export default function AllRoutes() {
  
  
    return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/alljobs' element={<JobPage/>} exact/>
      <Route path='/jobview/:id' element={<JobView/>} exact/>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/signup' element={<Register/>} exact/>
      <Route path='/learnmore' element={<LearnMore/>} exact/>
    </Routes>
  )
}

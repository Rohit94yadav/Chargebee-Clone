
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LearnMore from './LearnMore'
import Home from './Home'
import JobPage from './JobPage'
import JobView from './JobView'
import Login from './Login'
import Register from './Register'
import GetADemo from './GetADemo'
import PrivateRoute from "../Components/PrivateRoute";


export default function AllRoutes() {
  
  
    return (
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/alljobs' element={<JobPage/>} exact/>
      <Route path='/jobview/:id' element={<JobView/>} exact/>
      
      <Route path='/LearnMore' element={<LearnMore/>} />
      <Route path='/GetADemo' element={<PrivateRoute><GetADemo/></PrivateRoute>} />
    </Routes>
  )
}

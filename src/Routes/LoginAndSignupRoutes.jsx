import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function LoginAndSignupRoutes() {
  return (
    <Routes>
    
    <Route path='/login' element={<Login/>} exact/>
    <Route path='/Register' element={<Register/>} exact/>
    
  </Routes>
  )
}

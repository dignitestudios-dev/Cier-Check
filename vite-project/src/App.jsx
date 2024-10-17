import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Success from './success'
import Cancel from './Cancel'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/success' element={<Success />} />
      <Route path='/cancel' element={<Cancel />} />
    </Routes>
  )
}

export default App
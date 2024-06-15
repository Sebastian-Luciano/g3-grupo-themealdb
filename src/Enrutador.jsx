import React from 'react'
import MealDetails from './components/MealDetails/MealDetails'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card/Card'

export default function Enrutador() {
  return (
    <Routes>
      <Route path='/' element={<Card showAll />} />
      <Route path='/meals/:category' element={<Card />} />
      <Route path='/meal/:id' element={<MealDetails />} />
    </Routes>
  )
}

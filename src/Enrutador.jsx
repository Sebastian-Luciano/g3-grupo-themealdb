import React from 'react'
import MealDetails from './components/MealDetails/MealDetails'
import { Route, Routes } from 'react-router-dom'
import Card from './components/Card/Card'

export default function Enrutador() {
  return (
    <Routes>
        <Route path='/' element={<h1>Hola mundo</h1>}/>
        <Route path='/meals/:category' element={<Card/>}/>
        <Route path='/' element={<MealDetails/>}/>
        </Routes>
  )
}

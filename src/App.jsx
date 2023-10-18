import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import EmployeeList from './components/EmployeeList'
import CreateEmployee from './components/CreateEmployee'
import UpdateEmployee from './components/UpdateEmployee'
import Employee from './components/Employee'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/createemployee' element={<CreateEmployee />} />
        <Route path='/updateemployee/:id' element={<UpdateEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployee = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    id: id,
    firstName: '',
    lastName: '',
    emailId: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      const response = await EmployeeService.getEmployeeById(id)
      setEmployee(response.data)
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    setEmployee({ ...employee, [name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    EmployeeService.createEmployee(employee)
    navigate('/')
  }
  return (
    <div className='max-w-lg shadow mx-auto rounded-lg mt-8'>
      <div className='px-6 py-2'>
        <div className='font-thin text-2xl'>
          <h1>Employee Management</h1>
        </div>
        <form className='mt-4'>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label className='block text-gray-600'>FirstName</label>
              <input onChange={handleChange} name='firstName' value={employee.firstName} type='text' className='w-96 rounded border h-10 focus:outline-none border py-1 px-2' />
            </div>
            <div className='space-y-2'>
              <label className='block text-gray-600'>FirstName</label>
              <input onChange={handleChange} name='lastName' value={employee.lastName} type='text' className='w-96 rounded border h-10 focus:outline-none border py-1 px-2' />
            </div>
            <div className='space-y-2'>
              <label className='block text-gray-600'>FirstName</label>
              <input onChange={handleChange} name='emailId' value={employee.emailId} type='text' className='w-96 rounded border h-10 focus:outline-none border py-1 px-2' />
            </div>
            <div className='space-x-2'>
              <button onClick={handleSubmit} className='text-white px-6 py-2 bg-green-400 hover:bg-green-600'>
                Save
              </button>
              <button className='text-white px-6 py-2 bg-red-400 hover:bg-red-600'>Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateEmployee

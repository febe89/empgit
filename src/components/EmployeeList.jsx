import React, { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'
import Employee from './Employee'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const response = await EmployeeService.getEmployees()
        setList(response.data)
      } catch (e) {
        console.log(e)
      }
      setLoading(false)
    }
    fetch()
  }, [])
  const deleteEmployee = (id) => {
    console.log(id)
    EmployeeService.deleteEmployee(id)
      .then((res) => {})
      .catch((e) => console.log(e))
    setList((employee) => employee.filter((e) => e.id !== id))
  }
  const updateEmployee = (id) => {
    navigate(`/updateemployee/${id}`)
    console.log('js')
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <table className='w-full shadow'>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>EmailId</th>
            <th>Actions</th>
          </tr>
        </thead>
        {!loading && (
          <tbody className='bg-zinc-100'>
            {list.map((employee) => (
              <Employee key={employee.id} deleteEmployee={deleteEmployee} employee={employee} updateEmployee={updateEmployee} />
            ))}
          </tbody>
        )}
      </table>
    </div>
  )
}

export default EmployeeList

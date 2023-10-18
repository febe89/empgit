import React from 'react'
import { useParams } from 'react-router-dom'

const Employee = ({ employee, deleteEmployee, updateEmployee }) => {
  return (
    <tr className='text-center'>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.emailId}</td>
      <td>
        <button onClick={() => updateEmployee(employee.id)}>Edit</button>
        <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
      </td>
    </tr>
  )
}

export default Employee

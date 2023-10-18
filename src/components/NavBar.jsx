import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  const [sideBar, setSideBar] = useState(true)
  const [hideBtn, setHideBtn] = useState(false)
  return (
    <div className='text-black relative'>
      {sideBar && (
        <div className='h-screen absolute w-20 right-0 bg-red-200'>
          <button
            onClick={() => {
              setSideBar(false)
              setHideBtn(true)
            }}
          >
            Close
          </button>
        </div>
      )}
      <NavLink to={'/'}>NavBar</NavLink>
      <NavLink to={'/createemployee'}>
        <h2>Add Employee</h2>

        <button
          onClick={() => {
            setSideBar(true)
            setHideBtn(false)
          }}
        >
          {hideBtn && <div className=''>Mode</div>}
        </button>
      </NavLink>
    </div>
  )
}

export default NavBar

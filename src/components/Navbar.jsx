import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/react.svg'
const navbar = () => {
  const linkClass = ({isActive}) => isActive ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white  hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"

  return (
     <nav class="bg-indigo-700 border-b border-indigo-500">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">

            <NavLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <div className='flex'>
              
              <img
                class="h-10 w-auto"
                src= { logo }
                alt="React Jobs"/>
              <span class="hidden md:block text-white text-2xl font-bold ml-2"
                >Dev Jobs</span
              >
            </div>
            </NavLink>
            
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >Home</NavLink
                >
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  >Jobs</NavLink
                >

                <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default navbar
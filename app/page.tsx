import React from 'react'
import HomePage from '../Pages/Home'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div className="flex">
      <Navbar/>
      <HomePage />
    </div>
  )
}

export default page

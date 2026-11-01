import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function Mainlayout() {
  return (
    <div>
      <Navbar/>
      <main>
      <Outlet/>
      </main>
    </div>
  )
}

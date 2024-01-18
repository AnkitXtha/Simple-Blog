import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'

function NotFoundLayout() {
  return (
    <div>
      <Navbar />
      <div style={{position: "relative", zIndex: "0"}}>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundLayout

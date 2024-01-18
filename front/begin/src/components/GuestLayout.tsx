import React from 'react'
import { Outlet } from 'react-router-dom'

function GuesLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default GuesLayout

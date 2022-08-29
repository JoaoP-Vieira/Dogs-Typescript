import React from 'react'
import { Outlet } from 'react-router-dom'
import ProtectedRoute from '../Helper/ProtectedRoute'

const UserLayout: React.FC = () => {
  return (
    <ProtectedRoute>
      <Outlet />
    </ProtectedRoute>
  )
}

export default UserLayout

import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const ProtectedRoute = (
  params: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const context = React.useContext(UserContext)

  if (context?.login === true) return <>{params.children}</>
  else if (context?.login === false) return <Navigate to="/login" />
  else return null
}

export default ProtectedRoute

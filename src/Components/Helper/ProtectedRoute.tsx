import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

interface IProtectedRoute {
  children: JSX.Element
}

const ProtectedRoute = (params: IProtectedRoute) => {
  const context = React.useContext(UserContext)

  if (context?.login === true) return <>{params.children}</>
  else if (context?.login === false) return <Navigate to="/login" />
  else return null
}

export default ProtectedRoute

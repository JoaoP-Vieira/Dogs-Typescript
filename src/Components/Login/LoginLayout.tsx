import React from 'react'
import styles from './LoginLayout.module.css'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const LoginLayout: React.FC = () => {
  const context = React.useContext(UserContext)

  if (context?.login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  )
}

export default LoginLayout

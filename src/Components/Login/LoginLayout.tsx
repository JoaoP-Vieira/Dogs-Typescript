import React from 'react'
import styles from './LoginLayout.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'

const LoginLayout: React.FC = () => {
  const navigate = useNavigate()
  const context = React.useContext(UserContext)

  React.useEffect(() => {
    if (context?.login) navigate('/conta')
  }, [])

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </section>
  )
}

export default LoginLayout

import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as DogsLogo } from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

const Header: React.FC = () => {
  const context = React.useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <DogsLogo />
        </Link>
        {context?.login ? (
          <Link to="/conta" className={styles.login}>
            {context.data?.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header

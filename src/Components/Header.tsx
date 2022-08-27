import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as DogsLogo } from '../Assets/dogs.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home">
          <DogsLogo />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  )
}

export default Header

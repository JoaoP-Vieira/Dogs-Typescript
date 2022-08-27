import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados. &copy;</p>
    </footer>
  )
}

export default Footer

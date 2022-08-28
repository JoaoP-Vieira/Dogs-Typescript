import React from 'react'
import styles from './Button.module.css'

const Button: React.FC<JSX.IntrinsicElements['button']> = (params) => {
  return (
    <button className={styles.button} {...params}>
      {params.children}
    </button>
  )
}

export default Button

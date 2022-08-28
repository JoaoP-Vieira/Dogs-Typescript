import React from 'react'
import styles from './Input.module.css'

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  error: string
}

const Input: React.FC<IInput> = (props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.id} className={styles.label}>
        {props.label}
      </label>
      <input
        className={styles.input}
        id={props.id}
        name={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  )
}

export default Input

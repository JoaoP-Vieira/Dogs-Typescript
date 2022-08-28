import React, { ChangeEvent } from 'react'

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize somente números.'
  }
}

const useForm = (type?: 'email' | 'number') => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function validate() {
    if (!type) return true
    if (value.length === 0) {
      setError('Prencha um valor.')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError('')
      return true
    }
  }

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(),
    onBlur: () => validate()
  }
}

export default useForm

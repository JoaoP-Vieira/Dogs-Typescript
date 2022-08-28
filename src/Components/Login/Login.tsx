import React from 'react'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'

const Login = () => {
  const username = useForm()
  const password = useForm()

  const context = React.useContext(UserContext)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      context?.userLogin(username.value, password.value)
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />
        <Input label="Senha" type="password" id="password" {...password} />
        {context?.loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {context?.error}
      </form>
    </section>
  )
}

export default Login

import React from 'react'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'
import stylesBtn from '../Forms/Button.module.css'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'
import { Link } from 'react-router-dom'

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
        <Error>{context?.error}</Error>

        <Link className={styles.perdeu} to="/login/perdeu">
          Perdeu a Senha?
        </Link>

        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to="/login/criar">
            Cadastro
          </Link>
        </div>
      </form>
    </section>
  )
}

export default Login

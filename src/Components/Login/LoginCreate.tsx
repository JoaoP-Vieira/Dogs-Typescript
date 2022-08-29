import React, { FormEvent } from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../Helper/Error'

const LoginCreate: React.FC = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm()

  const context = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response?.ok) context?.userLogin(username.value, password.value)
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error>{error}</Error>
      </form>
    </section>
  )
}

export default LoginCreate

import React from 'react'

interface IUserContext {
  userName: string
  login: boolean
  userLogin: (userName: string, password: string) => Promise<void>
  error: string
  loading: boolean
}

export const UserContext = React.createContext<IUserContext | null>(null)

export const UserStorage: React.FC<JSX.IntrinsicElements['div']> = ({
  children
}) => {
  const [userName, setUserName] = React.useState('')
  const [login, setLogin] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function userLogin(userName: string, password: string) {
    try {
      setLoading(true)
      let res = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ username: userName, password: password })
        }
      )

      if (!res.ok) throw new Error(`Error: Usuário ou senha inválido.`)

      let json = await res.json()

      window.localStorage.setItem(
        'data',
        JSON.stringify({ token: json.token, userName: json.user_display_name })
      )
    } catch (err: any) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    const data = window.localStorage.getItem('data')
    if (data) {
      const dataObj = JSON.parse(data)

      setLogin(true)
      setUserName(dataObj.userName)
    } else {
      setLogin(false)
      setUserName('')
    }
  }, [])

  return (
    <UserContext.Provider
      value={{ userName, userLogin, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  )
}

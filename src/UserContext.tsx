import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api'

interface IUserContext {
  data: { id: number; username: string; nome: string; email: string } | null
  login: boolean | null
  userLogin: (userName: string, password: string) => Promise<void>
  userLogout: () => Promise<void>
  error: string
  loading: boolean
}

export const UserContext = React.createContext<IUserContext | null>(null)

export const UserStorage: React.FC<JSX.IntrinsicElements['div']> = ({
  children
}) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState<null | boolean>(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const userLogout = React.useCallback(
    async function () {
      setData(null)
      setError('')
      setLoading(false)
      setLogin(false)
      window.localStorage.removeItem('token')
      navigate('/login')
    },
    [navigate]
  )

  async function getUser(token: string) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }

  async function userLogin(username: string, password: string) {
    try {
      setError('')
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const tokenRes = await fetch(url, options)
      if (!tokenRes.ok) throw new Error(`Error: Usuário ou senha inválido.`)
      const { token } = await tokenRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (err: any) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError('')
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token inválido.')
          await getUser(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }

    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  )
}

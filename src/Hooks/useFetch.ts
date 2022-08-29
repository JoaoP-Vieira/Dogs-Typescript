import React from 'react'

interface IFetchOptions {
  method: string
  headers: any
  body: string
}

const useFetch = () => {
  const [data, setData] = React.useState(null)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(
    async (url: string, options: IFetchOptions) => {
      let response
      let json

      try {
        setError('')
        setLoading(true)
        response = await fetch(url, options)
        json = await response.json()

        if (response.ok === false) throw new Error(json.message)
      } catch (err: any) {
        json = null
        setError(err.message)
      } finally {
        setData(json)
        setLoading(false)
        return { response, json }
      }
    },
    []
  )

  return { data, loading, error, request }
}

export default useFetch

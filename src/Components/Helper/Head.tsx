import React from 'react'

interface IHead {
  title: string
  description?: string
}

const Head = (props: IHead) => {
  React.useEffect(() => {
    document.title = props.title + ' | Dogs'
    document
      .querySelector("meta[name='description']")
      ?.setAttribute('content', props.description || '')
  }, [])

  return <></>
}

export default Head

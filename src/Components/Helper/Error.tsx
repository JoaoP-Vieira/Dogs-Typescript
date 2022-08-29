import React from 'react'

const Error: React.FC<JSX.IntrinsicElements['p']> = ({ children }) => {
  if (!children) return null
  return <p style={{ color: '#F31', margin: '1rem 0' }}>{children}</p>
}

export default Error

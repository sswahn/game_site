import { createContext } from 'react'

const data = {
  display: 'default',
  authenticated: true
}

export const Context = createContext()

export default function Provider({ children }) {
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

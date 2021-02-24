import { createContext } from 'react'

export const Context = createContext()

const data = {
  modal: undefined
}

export default function Provider({ children }) {
  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  )
}

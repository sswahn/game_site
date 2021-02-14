import { createContext } from 'react'

export default function Provider(props) {
  const Context = createContext()
  const state = {
    display: 'default'
  }
  
  return (
    <Context.Provider value={state}>
      {props.children}
    </Context.Provider>
  )
}


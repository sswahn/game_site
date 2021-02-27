import { createContext, useReducer } from 'react'

export const Context = createContext()

export default function Provider({ children }) {
  const data = {
    authenticated: false,
    modal: undefined,
    checkbox: false
  }
  function reducer(state, action) {
    switch(action.type) {
      case 'authenticated':
        return { ...state, authenticated: action.payload }
      case 'modal':
        return { ...state, modal: action.payload }
      case 'checkbox':
        return { ...state, checkbox: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

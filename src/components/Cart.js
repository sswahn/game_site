import { useContext } from 'react'
import { Context } from '../Provider'

export default function Cart() {
  const [context, dispatch] = useContext(Context)
  
  const login = () => {
    dispatch({ type: 'modal', payload: 'login' })
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  return (
    <div className="">
      <h2>Your Cart is empty</h2>
      <button onClick={login}>Sign in to your account</button>
    </div>
  )
}
import { useContext } from 'react'
import { Context } from '../Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  const [context, dispatch] = useContext(Context)

  return (
    <div>
      <form className="login-form">
        <h2>Sign in</h2>
        <FontAwesomeIcon icon={faEnvelope} />
        <input type="email" placeholder="Email" required />
        <FontAwesomeIcon icon={faLock} />
        <input type="password" placeholder="Password" required />
        <input type="checkbox" /> &nbsp;
        <span>Remember me</span>
        <button type="submit">Login</button>
        </form>
        <div className="login-form-footer">
          <button className="login-form-link" onClick={() => dispatch({type: 'modal', payload: 'register'})}>
            <FontAwesomeIcon icon={faUserPlus} /> &nbsp;
            <span>Register</span>
          </button>
          <button className="login-form-link" onClick={() => dispatch({type: 'modal', payload: 'forgot-password'})}>Forgot password?</button>
        </div>
      </div>
  )
}
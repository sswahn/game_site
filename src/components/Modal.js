import { useContext, useReducer } from 'react'
import { Context } from '../Provider'
import { reducer } from '../utilities/reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Modal() {
  const context = useContext(Context)
  const [state, dispatch] = useReducer(reducer, context)

  const close = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }

  const renderLogin = () =>
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
          <button className="login-form-link" onClick={() => dispatch({type: 'registration'})}>
            <FontAwesomeIcon icon={faUserPlus} /> &nbsp;
            <span>Register</span>
          </button>
          <button className="login-form-link">Forgot password?</button>
        </div>
      </div>

  const renderRegistration = () =>
    <form className="login-form">
      <h2>Register New Account</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm password" required />
      <button type="submit">Register</button>
    </form>

  const renderForm = () => {
    if (state.modal === 'register') {
      return renderRegistration()
    }
    return renderLogin()
  }

  return (
    <div id="modal" className="modal">
      <div>
        <div>
          <button className="close-btn" onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {renderForm()}
      </div>
    </div>
  )
}
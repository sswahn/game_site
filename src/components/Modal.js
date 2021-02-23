import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

export default function Modal() {
  
  return (
    <div className="modal">
      <div>
        <div>
          <button className="close-btn">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <form className="login-form">
          <h2>Sign in</h2>
          <FontAwesomeIcon icon={faEnvelope} />
          <input id="username" type="text" placeholder="Email" />
          <FontAwesomeIcon icon={faLock} />
          <input id="password" type="password" placeholder="Password" />
          <input type="checkbox" /> &nbsp;
          <span>Remember me</span>
          <button type="submit">Login</button>
          <div>
            <a href=""><FontAwesomeIcon icon={faUserPlus} /> Register</a>
            <a href="">Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
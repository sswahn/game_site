import { useContext, useEffect, useRef } from 'react'
import { Context } from '../Provider'
import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'
import Cart from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Modal() {
  const [context, dispatch] = useContext(Context)

  const close = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
 
  const renderContent = () => {
    switch(context.modal) {
      case 'login':
        return <Login />
      case 'register':
        return <Register />
      case 'forgot-password':
        return <ForgotPassword />
      case 'cart':
        return <Cart />
      default:
        return
    }
  }

  // useEffect(() => {
    
  // }, [context.modal])
  

  return (
    <div id="modal" className="modal">
      <div>
        <div>
          <button className="close-btn" onClick={close}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}
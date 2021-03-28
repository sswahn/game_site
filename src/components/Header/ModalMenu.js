import { useContext } from 'react'
import { Context } from '../../Provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'

export default function ModalMenu() {
  const [context, dispatch] = useContext(Context)
  
  const login = () => {
    dispatch({ type: 'modal', payload: 'login' })
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }
  
  const cart = () => {
    dispatch({ type: 'modal', payload: 'cart'})
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  return (
    <div className="login">
      <button className="tooltip" onClick={login}>
        {context.authenticated 
          ? <a href={config.url.profile}>authed</a>
          : <FontAwesomeIcon icon={faUserCircle} />
        }
        <span className="tooltiptext">User Login</span>
      </button>
      <button className="tooltip" onClick={cart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="tooltiptext">Cart</span>
      </button>
    </div>
  )
}
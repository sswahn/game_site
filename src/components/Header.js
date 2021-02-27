import { useContext, useState } from 'react'
import { Context } from '../Provider'
import { config } from '../config'
import Checkbox from './Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ menu_open: false })
  
  const search = event => {
    event.preventDefault()
    alert('works')
  }

  const login = () => {
    dispatch({ type: 'modal', payload: 'login' })
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  const toggleClearButton = () => {
    const checkboxes = document.getElementsByClassName('checkbox')
    let is_checked = false
    for (const checkbox of checkboxes) {
      if (checkbox.firstChild.style.background === 'white') {
        is_checked = true
      }
    }
    const clear_button = document.getElementById('clear')
    if (is_checked === true) {
      dispatch({ type: 'checkbox', payload: true })
      clear_button.style.display = 'inline-block'
    } else {
      dispatch({ type: 'checkbox', payload: false })
      clear_button.style.display = 'none'
    }
  }

  const clearCheckboxes = event => {
    const elements = document.getElementsByClassName('checkbox')
    Object.keys(elements).forEach(key => {
      elements[key].firstChild.style.background = 'gray'
    })
    event.target.style.display = 'none'
  }

  const onClick = event => {
    const menu = document.getElementById('menu')
    const button = event.currentTarget
    if (state.menu_open) {
      setState({ menu_open: !state.menu_open })
      menu.style.display = 'none'
    } else {
      setState({ menu_open: !state.menu_open })
      button.style['border-bottom'] = '4px solid teal'
      button.style['padding-bottom'] = '21px'
      menu.style.display = 'block'
    }
  }

  const onMouseOver = event => {
    const element = event.currentTarget
    element.style['border-bottom'] = '4px solid teal'
    element.style['padding-bottom'] = '21px'
  }

  const onMouseOut = event => {
    if (!state.menu_open) {
      const element = event.currentTarget
      element.style['border-bottom'] = '0'
      element.style['padding-bottom'] = '25px'
    }
  }

  return (
    <header className="header">
      <h1>
        <a href={config.url.home} rel="home">
          <img src="" alt="logo" />
          <FontAwesomeIcon icon={faBars} />
        </a>
      </h1>
      <nav>
        <div className="dropdown-container">
          <div className="dropdown">
            <button id="games" className="dropdown-btn" onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
              <span>Games</span>
              {state.menu_open 
                ? <FontAwesomeIcon icon={faTimes} />
                : <FontAwesomeIcon icon={faCaretDown} />}
            </button>
            <div id="menu" className="dropdown-content">
              <div className="dropdown-header">
                <div>
                  <span>Category</span>
                  <span>Genre</span>
                  <span>Filters <button id="clear" onClick={clearCheckboxes}>(clear)</button></span>
                </div>
              </div>
              <div className="dropdown-row">
                <div className="dropdown-col">
                  <button>Featured</button>
                  <button>New Releases</button>
                  <button>On Sale</button>
                  <button>Recommended</button>
                  <button>Top Sellers</button>
                </div>
                <div className="dropdown-col">
                  <button>Action</button>
                  <button>Adventure</button>
                  <button>Horror</button>
                  <button>Platformer</button>
                  <button><abbr title="Role Playing Games">RPG</abbr></button>
                  <button>Shooters</button>
                  <button>Sports & Racing</button>
                  <button>Strategy</button>
                  <button>Survival</button>
                </div>
                <div className="vertical-rule"></div>
                <div className="dropdown-col">
                  <Checkbox label="Windows" toggleClearButton={toggleClearButton} />
                  <Checkbox label="Mac OS X" toggleClearButton={toggleClearButton} />
                  <Checkbox label="Linux" toggleClearButton={toggleClearButton} />
                  <Checkbox label="Android" toggleClearButton={toggleClearButton} />
                  <Checkbox label="iOS" toggleClearButton={toggleClearButton} />
                  <Checkbox label="Web" toggleClearButton={toggleClearButton} />
                </div>
                <div className="dropdown-col">
                  <Checkbox label="Free" toggleClearButton={toggleClearButton} />
                  <Checkbox label="$5 or less" toggleClearButton={toggleClearButton} />
                  <Checkbox label="$10 or less" toggleClearButton={toggleClearButton} />
                  <Checkbox label="$15 or less" toggleClearButton={toggleClearButton} />
                  <Checkbox label="$20 or less" toggleClearButton={toggleClearButton} />
                  <Checkbox label="$25 or less" toggleClearButton={toggleClearButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <form>
          <input type="search" placeholder="Search for games or developers" />
          <button type="submit" onClick={search}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="login">
          <button className="tooltip" onClick={login}>
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="tooltiptext">User Login</span>
          </button>
          <button className="tooltip">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="tooltiptext">Cart</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
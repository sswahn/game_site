import { useContext, useReducer } from 'react'
import { Context } from '../Provider'
import { reducer } from '../utilities/reducer'
import { config } from '../config'
import Checkbox from './Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
  const context = useContext(Context)
  const [state, dispatch] = useReducer(reducer, context)

  const search = event => {
    event.preventDefault()
    alert('works')
  }

  const login = () => {
    dispatch({type: 'login'})
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  const onMouseOver = () => {
    const element = document.getElementById('games')
    element.style['border-bottom'] = '4px solid teal'
    element.style['padding-bottom'] = '21px'
  }

  const onMouseOut = () => {
    const element = document.getElementById('games')
    element.style['border-bottom'] = '0'
    element.style['padding-bottom'] = '25px'
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
            <button id="games" className="dropdown-btn" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              <span>Games</span>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className="dropdown-content" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
              <div className="dropdown-header">
                <div>
                  <span>Category</span>
                  <span>Genre</span>
                  <span>Filters <button>(clear)</button></span>
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
                  <Checkbox label="Windows" />
                  <Checkbox label="Mac OS X" />
                  <Checkbox label="Linux" />
                  <Checkbox label="Android" />
                  <Checkbox label="iOS" />
                  <Checkbox label="Web" />
                </div>
                <div className="dropdown-col">
                  <Checkbox label="Free" />
                  <Checkbox label="$5 or less" />
                  <Checkbox label="$10 or less" />
                  <Checkbox label="$15 or less" />
                  <Checkbox label="$20 or less" />
                  <Checkbox label="$25 or less" />
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
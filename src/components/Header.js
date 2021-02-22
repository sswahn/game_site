import { config } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

  const search = event => {
    event.preventDefault()
    alert('works')
  }

  return (
    <header className="header">
      <h1>
        <a href={config.url.home} rel="home">
          <img src="" alt="logo" />
          {/* <FontAwesomeIcon icon={faBars} /> */}
        </a>
      </h1>
      <div>
        <nav>
          <div className="dropdown">
            <button className="dropdown-btn">
              <i className="fas fa-gamepad"></i>
              <span>Games</span>
              <i className="fas fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <div className="dropdown-header">
                <div>
                  <span>Category</span>
                  <span>Genre</span>
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
              </div>
            </div>
          </div>
        </nav>
        <form>
          <input type="search" placeholder="Search for games or developers" />
          <button type="submit" onClick={search}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <div className="login">
          <button>
            <FontAwesomeIcon icon={faUserCircle} title="User Login" />
          </button>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} title="View Cart" />
          </button>
        </div>
      </div>
    </header>
  )
}
import { config } from '../config'

export default function Header() {
  return (
    <header className="header">
      <h1>
        <a href={config.url.home} rel="home">
          <img src="" alt="logo" />
        </a>
      </h1>
      <nav>
        <div className="dropdown">
          <button className="dropdown-btn">
            <span>Browse Games</span>
            <i className="fas fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <div className="dropdown-header">
              <div>Genre</div>
              <div>Category</div>
            </div>
            <div className="dropdown-row">
              <div className="dropdown-col">Action</div>
              <div className="dropdown-col">Adventure</div>
              <div className="dropdown-col"><abbr title="Role Playing Games">RPG</abbr></div>
              <div className="dropdown-col">Strategy</div>
              <div className="dropdown-col">Horror</div>
              <div className="dropdown-col">Survival</div>
              <div className="dropdown-col">Platformer</div>
              <div className="dropdown-col">Sports</div>
              <div className="dropdown-col">Racing</div>
              <div className="dropdown-col">Casual</div>
            </div>
            <div className="dropdown-row">
              <div className="dropdown-col">Featured</div>
              <div className="dropdown-col">New Releases</div>
              <div className="dropdown-col">Top Sellers</div>
              <div className="dropdown-col">Recommended</div>
              <div className="dropdown-col">Mobile</div>
            </div>
          </div>
        </div>
      </nav>
      <form>
        <input type="search" placeholder="Search for games or developers" />
        <button type="submit">
          <span>Search</span>
          <i className=""></i>
        </button>
      </form>
      <div>
        <button>
          <span>Login</span>
          <i className="fa fa-user-o"></i>
        </button>
      </div>
    </header>
  )
}
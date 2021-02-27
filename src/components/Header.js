import GamesButton from './Header/GamesButton'
import DropdownMenu from './Header/DropdownMenu'
import SearchBar from './Header/SearchBar'
import ModalMenu from './Header/ModalMenu'
import { config } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
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
            <GamesButton />
            <DropdownMenu />
          </div>
        </div>
        <SearchBar />
        <ModalMenu />
      </nav>
    </header>
  )
}
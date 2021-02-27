import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() {

  const search = event => {
    event.preventDefault()
    alert('works')
  }
  
  return (
    <form>
      <input type="search" placeholder="Search for games or developers" />
      <button type="submit" onClick={search}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}
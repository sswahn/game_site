import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function GamesButton() {
  const [state, setState] = useState({ menu_open: false })
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
  
  return (
    <button id="games" className="dropdown-btn" onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
      <span>Games</span>
      {state.menu_open 
        ? <FontAwesomeIcon icon={faTimes} />
        : <FontAwesomeIcon icon={faCaretDown} />}
    </button>
  )
}
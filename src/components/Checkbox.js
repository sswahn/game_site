import { useState, useContext, useEffect } from 'react'
import { Context } from '../Provider'

export default function Checkbox({ label, toggleClearButton }) {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ is_checked: true })
  
  const checked = event => {
    setState({ is_checked: !state.is_checked })
    if (context.checkbox === false) {
      setState({ is_checked: true })
    }
    if (state.is_checked) {
      event.currentTarget.firstChild.style.background = 'white'
    } else {
      event.currentTarget.firstChild.style.background = 'gray'
    }
    toggleClearButton()
  }

  // useEffect(() => {
    
  // }, [])

  return (
    <div className="checkbox" onClick={checked}>
      <span></span>
      <span>{label}</span>
    </div>
  )
}
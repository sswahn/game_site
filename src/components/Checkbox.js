import { useState, useEffect } from 'react'

export default function Checkbox({ label, toggleClearButton }) {
  const [state, setState] = useState({ is_checked: true })
  
  const checked = event => {
    setState({ is_checked: !state.is_checked })
    if (state.is_checked) {
      event.currentTarget.firstChild.style.background = 'white'
    } else {
      event.currentTarget.firstChild.style.background = 'gray'
    }
    toggleClearButton(state, setState)
  }

  //useEffect(() => {
    // filter data by label (or checkbox id?)
    // by editing data in context.data / store
  //}, [])

  return (
    <div className="checkbox" onClick={checked}>
      <span></span>
      <span>{label}</span>
    </div>
  )
}
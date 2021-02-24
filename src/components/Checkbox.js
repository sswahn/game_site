import { useState } from 'react'

export default function Checkbox({ label }) {
  const [state, setState] = useState({
    is_checked: true
  })

  const checked = event => {
    setState({ is_checked: !state.is_checked })
    const element = event.currentTarget.firstChild
    if (state.is_checked) {
      element.style.background = 'white'
    } else {
      element.style.background = 'gray'
    }
  }

  return (
    <div className="checkbox" onClick={checked}>
      <span></span>
      <span>{label}</span>
    </div>
  )
}
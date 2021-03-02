

export default function Checkbox({ label, toggleClearButton }) {
  
  const checked = event => {
    const element = event.currentTarget.firstChild
    if (element.style.background === 'gray' || element.style.background === '') {
      element.style.background = 'white'
    } else {
      element.style.background = 'gray'
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
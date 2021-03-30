import { useState, useContext, useEffect } from 'react'
import { Context } from '../Provider'

export default function ProductItem({ product }) {
  const [state, setState] = useState({
    show_tooltip: false
  })
  const [context, dispatch] = useContext(Context)

  const showToolTip = () => {
    setState({ show_tooltip: true })
  }

  const hideToolTip = () => {
    setState({ show_tooltip: false })
  }

  const renderTooltip = product =>
    <div className="product-tooltip">
      <strong>{product.title}</strong>
      <img src={product.title_art} alt={product.title} />
      <p>{product.description}</p>
    </div>

  return (
    <div className="item" onMouseOver={showToolTip} onMouseOut={hideToolTip}>
      <a href={context.formatUrl(product.title)}>
        <img src={product.title_art} alt={product.title} />
      </a>
      <p>
        <span>{product.title}</span>
        <span>{product.price}</span>
      </p>
      {state.show_tooltip === true ? renderTooltip(product) : <></>}
    </div>
  )
}
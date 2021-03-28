import { useState, useContext } from 'react'
import { Context } from '../Provider'

export default function ProductItem({ product }) {
  const [state, setState] = useState({ show_tooltip: false})
  const [context, dispatch] = useContext(Context)

  const toggleToolTip = () => {
    setState({ show_tooltip: !state.show_tooltip })
  }

  const renderTooltip = product =>
    <div className="product-tooltip">
      <p>{product.title}</p>
      <img src={product.title_art} alt={product.title} />
    </div>

  return (
    <div className="item" onMouseOver={toggleToolTip} onMouseOut={toggleToolTip}>
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
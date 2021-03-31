import { useContext } from 'react'
import { Context } from '../Provider'

export default function ProductItem({ product }) {
  const [context, dispatch] = useContext(Context)

  return (
    <div className="product-item">
      <div className="item">
        <a href={context.formatUrl(product.title)}>
          <img src={product.title_art} alt={product.title} />
        </a>
        <p>
          <span>{product.title}</span>
          <span>{product.price}</span>
        </p>
      </div>
      <div className="product-tooltip">
        <strong>{product.title}</strong>
        <img src={product.title_art} alt={product.title} />
        <p>{product.description}</p>
      </div>
    </div>
  )
}
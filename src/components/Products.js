import ProductItem from './ProductItem'

export default function Products({ data }) {
  return (
    <div className="products">
      {data.user.products.map(product => <ProductItem key={product.id} product={product} /> )}
    </div>
  )
}
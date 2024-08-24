import React  from 'react'
import { ProductType } from '@/services/products'
import ProductCard from './ProductCard'

type ProductListProps = {
    products: ProductType[]
}

const ProductsList: React.FC<ProductListProps> = ({ products }) => {

    return (
        <>
      <ul className='grid grid-cols-4 gap-3 mt-4 px-4 mb-16'>
        {products.map(product => (
          <li key={product.id} className='border'>
            <ProductCard  product={product}/>
          </li>
        ))}
        {/* {products.map((item) => (<ProductCard key={item.id} product={item} />))} */}
      </ul>
        </>
    )
}

export default ProductsList
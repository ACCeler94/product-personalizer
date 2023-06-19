import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map(product => {
        return (
          <li key={product.id}>
            <Product {...product} />
          </li>
        )
      })}
    </section>
  );
};

export default Products;
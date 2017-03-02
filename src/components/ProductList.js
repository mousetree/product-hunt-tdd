import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  return (
    <div>
      {
        props.products.map(product => {
          return (
            <Product
              key={product.name}
              name={product.name}
              description={product.description}
              onProductSelect={props.onProductSelect}
            />
          )
        })
      }
    </div>
  )
};

ProductList.propTypes = {
  products: React.PropTypes.array.isRequired,
  onProductSelect: React.PropTypes.func.isRequired
};

export default ProductList;
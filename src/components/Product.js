import React from 'react';

const Product = (props) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.description}</div>
      <button onClick={() => {props.onProductSelect(props)}}>
        Add to cart
      </button>
    </div>
  )
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  onProductSelect: React.PropTypes.func.isRequired
};

export default Product;
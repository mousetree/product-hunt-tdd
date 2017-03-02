import React from 'react';
import ProductList from './ProductList';
import Product from './Product';
import {shallow} from 'enzyme';

const mock = [
  {  name: "Nike AirMax", description: "The best shoe" },
  {  name: "Rebook Classic", description: "The second best shoe" },
  {  name: "Adidas EQT", description: "The worst shoe" }
];

let productSelectStub = jest.fn();
let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <ProductList
      products={mock}
      onProductSelect={productSelectStub}
    />
  );
});

it('should contain a <Product> for every product passed in', () => {
  expect(wrapper.find(Product).length).toEqual(mock.length)
});
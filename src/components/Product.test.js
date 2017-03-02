import React from 'react';
import Product from './Product';
import {shallow} from 'enzyme';

const mock = {
  name: "AirMax",
  description: "The best shoe"
};

let productSelectStub = jest.fn();

let wrapper;

beforeEach(() => {
  wrapper = shallow(
    <Product
      name={mock.name}
      description={mock.description}
      onProductSelect={productSelectStub}
    />
  );
});

afterEach(() => {
  productSelectStub.mockReset();
});

it('should display the product name', () => {
  expect(wrapper.contains(mock.name)).toEqual(true);
});

it('should display the product description', () => {
  expect(wrapper.contains(mock.description)).toEqual(true);
});

it('should display a button to add to cart', () => {
  expect(wrapper.find('button').length).toEqual(1);
});

describe('when clicking `<button>`', () => {

  it('should call the function `props.onProductSelect` and pass it the props', () => {
    expect(productSelectStub).not.toHaveBeenCalled();
    const button = wrapper.find('button').first();
    button.simulate('click');
    expect(productSelectStub).toHaveBeenCalled();
    expect(productSelectStub).toHaveBeenCalledWith(expect.objectContaining(mock));
  });

});


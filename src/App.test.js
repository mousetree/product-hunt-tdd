import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should have some initial state', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.state().selectedProducts.length).toEqual(0);
});

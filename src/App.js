import React, { Component } from 'react';
import ProductList from './components/ProductList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProducts: []
    };
    this.handleProductSelect = this.handleProductSelect.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Hello World - You have selected {this.state.selectedProducts.length} products</h1>
        <ProductList products={this.state.products} onProductSelect={this.handleProductSelect}/>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      products: [
        {  name: "Nike AirMax", description: "The best shoe" },
        {  name: "Rebook Classic", description: "The second best shoe" },
        {  name: "Adidas EQT", description: "The worst shoe" }
      ]
    });
  }

  handleProductSelect(product) {
    console.log(`You have selected ${product.name}`);
    this.setState(prevState => {
      return {
        selectedProducts: [
          ...prevState.selectedProducts,
          product
        ]
      }
    })
  }
}

export default App;

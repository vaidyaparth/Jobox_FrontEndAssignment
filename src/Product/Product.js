import React, { Component } from 'react'
import Producttable from '../ProductTableComponent/ProductTable'

// let counter++;

class Product extends Component {

    constructor(props) {
      super(props);
        this.state = {};
      this.state.filterText = "";
      this.state.products = [
        {
          id: 1,
          name: 'Parth Vaidya',
          age: '22',
          address: '1171 Boylston Street',
          operation: 'football'
        }
      ];
      var cnt = 0;
    }
    handleUserInput(filterText) {
      this.setState({filterText: filterText});
    };
    handleRowDel(product) {
      var index = this.state.products.indexOf(product);
      this.state.products.splice(index, 1);
      this.setState(this.state.products);
    };

    handleAddEvent(evt) {
      var product = {
        id:this.create_UUID(1),
        name: "name",
        age: 0,
        address: "address",
        operation: "operation"
      }
      this.state.products.splice(0,0,product);
      this.setState(this.state.products);
      console.log(product.id);
  
    }
  
     create_UUID(cnt){
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
  }
  
    handleProductTable(evt) {
      var item = {
        id: evt.target.id,
        name: evt.target.name,
        value: evt.target.value
      };
  var products = this.state.products.slice();
    var newProducts = products.map(function(product) {
  
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;
  
        }
      }
      return product;
    });
      this.setState({products:newProducts});
    };
    render() {
      return (
        <div>
        <Producttable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}  products={this.state.products} filterText={this.state.filterText}/>
        </div>
      );
  
    }
  
  }
  
  
export default Product  
  

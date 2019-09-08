import React, { Component } from 'react'
import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'
  class ProductTable extends Component {
  
    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var rowEdit = this.props.onRowEdit; 
      var filterText = this.props.filterText;
      
      var product = this.props.products.map(function(product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
      });
      return (
        <div>
  
  <h1 id='title' />
        <button id="btn" type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
          <table id="ptable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Operation</th>
              </tr>
            </thead>
  
            <tbody>
              {product}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }

  export default ProductTable
  
import React, { Component } from 'react'
import EditableCell from '../EditableCell/Editable'
import TrashIcon from './Icons/trash.png'

class ProductRow extends Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.product);
  
    }
   
    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            "type": "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "age",
            value: this.props.product.age,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "address",
            value: this.props.product.address,
            id: this.props.product.id
          }}/>
          <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
            type: "operation",
            value: this.props.product.operation,
            id: this.props.product.id
          }}/>
          

          <td id="del-cell">
          <img src={TrashIcon} type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
          
        </tr>
      );
  
    }
  
  }
  export default ProductRow
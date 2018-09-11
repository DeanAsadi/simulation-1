import React, { Component } from "react";
import axios from "axios";

import Product from "../Product/Product";

class Dashboard extends Component {
  state = {
    edit: false,
    productName: "",
    productImage: "",
    price: ""
  };
  handleDelete = id => {
    axios.delete(`/api/product/${id}`).then(() => {
      this.props.getAllProducts();
    });
  };

  handleUpdateProduct = (id, name, image, price) => {
    axios
      .put(`/api/product/${id}`, { name, image, price })
      .then(() => this.props.getAllProducts());
  };

  handleEditing = () => {
    this.setState({ edit: !this.state.edit });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  buttonMargin = {
    margin: "10px"
  };

  render() {
    const { productName, productImage, price } = this.state;
    const { inventory } = this.props;

    console.log("inv from sim-1 render", this.props.inventory);

    let displayInventory = inventory.map(product => {
      return (
        <div key={product.id}>
          <div>
            <img src={product.image} width="100px" height="100px" />
          </div>
          <div>
            Name: {product.name} ${product.price}
          </div>
          <button onClick={id => this.handleDelete(product.id)}>
            Delete from DB
          </button>
          <button onClick={this.handleEditing} style={this.buttonMargin}>
            Update
          </button>
        </div>
      );
    });
    return (
      <div>
        {this.state.edit ? (
          <div>
            <input
              name="productName"
              value={productName}
              onChange={this.handleChange}
              placeholder=" Product name "
            />
            <input
              name="productImage"
              value={productImage}
              onChange={this.handleChange}
              placeholder=" Product Image "
            />
            <input
              name="price"
              value={price}
              onChange={this.handleChange}
              placeholder=" Product Price "
            />
            <button
              onClick={id =>
                this.handleUpdateProduct(productName, productImage, price)
              }
            >
              Update
            </button>
          </div>
        ) : (
          <div>{displayInventory}</div>
        )}
      </div>
    );
  }
}
export default Dashboard;

//1- writre handleDelete Method, and hook it to an event.
//2- map over this.state.props from Ajax we had in componentDidMount() in App.js
//3- return the results.

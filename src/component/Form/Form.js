import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productImage: "",
      productPrice: 0
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreate = () => {
    axios.post("/api/product", {
      name: this.state.productName,
      image: this.state.productImage,
      price: this.state.productPrice
    });
    this.props.getAllProducts();
  };

  handleCancel = () => {
    this.setState({
      productName: "",
      productImage: "",
      productPrice: 0
    });
  };

  render() {
    return (
      <div>
        <input
          name="productName"
          value={this.state.productName}
          placeholder="name"
          onChange={this.handleChange}
        />
        <input
          name="productPrice"
          value={this.state.productPrice}
          placeholder=" Price"
          onChange={this.handleChange}
        />
        <input
          name="productImage"
          value={this.state.productImage}
          placeholder="Image URL"
          onChange={this.handleChange}
        />
        <br />
        <button onClick={this.handleCancel}>cancel</button>
        <button onClick={this.handleCreate} style={{ marginBottom: "30px" }}>
          Add to Inventory :)
        </button>
      </div>
    );
  }
}
export default Form;

//1- init a state for our POST req. and setState for each one of them.
//2- write axios.post
//3- write cancel button mwthod.
//4- create you regular inputs and call you cancel + axios.post methods on events.

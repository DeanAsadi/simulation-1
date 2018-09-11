import React, { Component } from "react";
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  render() {
    const { productName, productImage, price, edit } = this.state;

    return <div />;
  }
}
export default Product;

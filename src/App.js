import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//Components
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Form from "./component/Form/Form";
import Product from "./component/Product/Product";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    };
  }

  componentDidMount() {
    this.getAllProducts();
  }

  getAllProducts = () => {
    axios.get("/api/products").then(response => {
      this.setState({ inventory: response.data });
      console.log(" this.state.inventory in App.js ", this.state.inventory);
    });
  };
  render() {
    return (
      <div className="App">
        <Header /> <br />
        <Form getAllProducts={this.getAllProducts} />
        <Product getAllProducts={this.getAllProducts} />
        <Dashboard
          inventory={this.state.inventory}
          getAllProducts={this.getAllProducts}
        />
      </div>
    );
  }
}

export default App;

//1- init a state.
//2- make axios.getAll, and re-use that in both Dashboard & Form component as props with the state too.
//3- render the 3 component in App.js, while rendering them use "props" to add to them what you want.

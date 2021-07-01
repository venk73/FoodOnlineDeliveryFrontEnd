import React, { Component } from "react";
import Filter from "../Customer/OrdersPayment/Filter";
import Products from "../Customer/OrdersPayment/Products";
import Cart from "../Customer/OrdersPayment/Cart"

export default class CartDashboard extends Component {
  render() {
  
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter></Filter>
            <Products> </Products>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    );
  }
}
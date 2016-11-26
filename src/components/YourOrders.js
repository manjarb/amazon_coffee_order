import React, { Component } from 'react';
import { Link } from 'react-router';

class YourOrders extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/");
    this.props.updateHeaderName("SUCCESS ORDER");
  }

  render() {
    return (
      <div className="your-orders-container">
        <div className="content">
          <h2 className="text-center">
            <strong>Your Orders</strong>
          </h2>
          <div className="your-orders-details-box">
            <div className="columns is-mobile">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column text-right">
                <strong>Quantity</strong>
              </div>
              <div className="column text-right">
                <strong>Price</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YourOrders;

import React, { Component } from 'react';
import { Link } from 'react-router';

class YourOrders extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/");
    this.props.updateHeaderName("YOUR ORDERS");
  }

  render() {
    return (
      <div className="your-orders-container">
        <div className="content">
          <div className="your-orders-details-box">
            <div className="columns is-mobile">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column text-right">
                <strong>Quantity (Cups)</strong>
              </div>
              <div className="column text-right">
                <strong>Price (Baht)</strong>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-6">
                <p className="order-details-para blue-text">
                  <strong>
                    Espresso Cold
                  </strong>
                  <br/>
                  <span>
                    - Normal Sugar
                    <br/>
                    - Extra coffee 2 Shots
                  </span>
                </p>
              </div>
              <div className="column text-right">
                <strong>4</strong>
              </div>
              <div className="column text-right">
                <strong>
                  240
                  <span className="your-orders-extra-shot-price">+ 80</span>
                </strong>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-6">
                <p className="order-details-para red-text">
                  <strong>
                    Espresso Hot
                  </strong>
                  <br/>
                  <span>
                    - Normal Sugar
                    <br/>
                    - Extra coffee 2 Shots
                  </span>
                </p>
              </div>
              <div className="column text-right">
                <strong>4</strong>
              </div>
              <div className="column text-right">
                <strong>
                  240
                  <span className="your-orders-extra-shot-price">+ 80</span>
                </strong>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column"></div>
              <div className="column"></div>
              <div className="column is-6 text-right medium-text">
                <strong>TOTAL: &nbsp; 480</strong>
              </div>
            </div>
          </div>
          <br/>
          <div className="button-submit-your-orders-box">
            <Link to="/order/1/success">
              <button className="button is-success is-large">
                <strong>Confirm Orders</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default YourOrders;

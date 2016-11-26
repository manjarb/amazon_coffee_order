import React, { Component } from 'react';
import { Link } from 'react-router';

class SuccessOrder extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/shops/1");
    this.props.updateHeaderName("SUCCESS ORDER");
  }

  render() {
    return (
      <div className="success-order-box">
        <div className="content text-center">
          <h1 className="green-text">
            <strong>Thank you!</strong>
          </h1>
          <p>
            We will notify you. <br/>
            When your drinks is making.
          </p>
          <h2>
            <strong>1150</strong>
          </h2>
          <p>Please share this code to the staff.</p>
          <h3>
            Location: <strong>Siam Paragon</strong>
          </h3>
          <h4>
            Enjoy Your Drinks!
          </h4>
          <p>
            (You can open this image inside your image box)
          </p>
        </div>
      </div>
    );
  }
}

export default SuccessOrder;

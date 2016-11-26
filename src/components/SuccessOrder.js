import React, { Component } from 'react';

class SuccessOrder extends Component {

  constructor(){
    super();
    this.state = {code: ""}
  }

  componentDidMount(){
    this.props.updatePreviousPath("/shops/1");
    this.props.updateHeaderName("SUCCESS ORDER");
    this.setState({code: Math.floor(Math.random() * 9999) + 1000});
    this.location = (this.props.shops.filter(x => x.id === parseInt(this.props.params.id, 10)).map(x=> x.location))[0];

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
            <strong>{this.state.code}</strong>
          </h2>
          <p>Please share this code to the staff.</p>
          <h3>
            Location: <strong>{this.location}</strong>
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

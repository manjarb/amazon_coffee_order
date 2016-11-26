import React, { Component } from 'react';

class OrderModal extends Component {

  constructor(){
    super();
    this.state = {
      amount: 1
    }
  }

  addAmount(amount){
    this.setState({amount: amount + 1})
  }

  deleteAmount(amount){
    if(amount >= 2){
      this.setState({amount: amount - 1})
    }
  }

  render() {
    return (
      <div className="modal is-active order-modal-element">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-header">
              <p className="card-header-title">
                Order Drinks
              </p>
              <a className="card-header-icon" onClick={this.props.closeModal}>
                <i className="fa fa-times"/>
              </a>
            </div>
            <div className="card-content">
              <div className="content text-center">
                <h2>
                  <strong>{this.props.drink.name} {this.props.status}</strong>
                </h2>
                <div className="modal-order-amount-box">
                  <div className="columns is-mobile">
                    <div className="column">
                      <button type="button"
                              className="button is-danger"
                              onClick={() => this.deleteAmount(this.state.amount)}>
                        -
                      </button>
                    </div>
                    <div className="column">
                      {this.state.amount}
                    </div>
                    <div className="column">
                      <button type="button"
                              className="button is-success"
                              onClick={() => this.addAmount(this.state.amount)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="modal-order-special-offer-box">
                  <div className="columns is-mobile">
                    <div className="column">
                      <p className="control text-center">
                        <label className="checkbox">
                          <input type="checkbox"/>
                            Low Fat
                        </label>
                      </p>
                    </div>
                    <div className="column">
                      <p className="control text-center">
                        <label className="checkbox">
                          <input type="checkbox"/>
                            Extra Shot
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item button is-info" onClick={this.props.moreDetailsOrder}>More Details</a>
              <a className="card-footer-item button is-success"
                 onClick={() => this.props.placeOrder(this.props.drink,this.state.amount,this.props.status)}>Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;

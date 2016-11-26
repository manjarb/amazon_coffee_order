import React, { Component } from 'react';
import { Link } from 'react-router';

class OrderModal extends Component {

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
                  <strong>Cold Expresso</strong>
                </h2>
                <div className="modal-order-amount-box">
                  <div className="columns is-mobile">
                    <div className="column">
                      <button type="button" className="button is-danger">
                        -
                      </button>
                    </div>
                    <div className="column">1</div>
                    <div className="column">
                      <button type="button" className="button is-success">
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
              <a className="card-footer-item button is-success" onClick={this.props.placeOrder}>Buy Now</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;

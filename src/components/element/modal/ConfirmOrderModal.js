import React, { Component } from 'react';
import { Link } from 'react-router';

class ConfirmOrderModal extends Component {

  render() {
    return (
      <div className="modal is-active order-modal-element">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-header">
              <p className="card-header-title">
                Confirm Order
              </p>
            </div>
            <div className="card-content">
              <div className="content text-center">
                <h2>
                  <strong>Cold Expresso</strong>
                </h2>
                <div className="modal-order-amount-box">
                  <div className="columns is-mobile">
                    <div className="column">1 Cup</div>
                  </div>
                </div>
                <div className="confirm-order-extra-list-box">
                  <ul>
                    <li><a href="#">- Low Fat</a></li>
                    <li><a href="#">- Extra Shot</a></li>
                  </ul>
                </div>
                <br/>
                <div className="payment-model-box">
                  <label className="label">Payment Method</label>
                  <p className="control text-center">
                    <span className="select">
                      <select>
                        <option>Cash</option>
                        <option>Credit Card</option>
                      </select>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item button is-danger" onClick={this.props.closeModal}>Cancel Order</a>
              <a className="card-footer-item button is-success" onClick={this.props.confirmOrder}>Confirm Order</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmOrderModal;

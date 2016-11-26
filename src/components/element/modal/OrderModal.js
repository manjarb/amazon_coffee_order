import React, { Component } from 'react';
import { Link } from 'react-router';

class OrderModal extends Component {

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-header">
              <p className="card-header-title">
                Component
              </p>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <br/>
                  <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item" onClick={this.props.closeModal}>Cancel</a>
              <a className="card-footer-item" onClick={this.props.placeOrder}>Order more</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;

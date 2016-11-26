import React, { Component } from 'react';
import { Link } from 'react-router';

class OrderModal extends Component {

  render() {
    return (
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <header className="card-header">
              <p className="card-header-title">
                Component
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <br/>
                  <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item">Save</a>
              <a className="card-footer-item">Delete</a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderModal;

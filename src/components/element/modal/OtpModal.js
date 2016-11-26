import React, { Component } from 'react';
import { Link } from 'react-router';

class OtpModal extends Component {

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-header">
              <p className="card-header-title">
                Confirm Account
              </p>
            </div>
            <div className="card-content">
              <div className="content">
                <h2>กรุณาใส่เบอร์โทรศัพท์</h2>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item" onClick={this.props.closeModal}>Cancel</a>
              <a className="card-footer-item">Confirm</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OtpModal;

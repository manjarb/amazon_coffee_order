import React, { Component } from 'react';

class OtpModal extends Component {

  constructor(){
    super();
    this.randomOtp = this.randomOtp.bind(this);
    this.state = {
      otpCode: ""
    }
  }

  randomOtp(){
    this.setState({otpCode: Math.floor(Math.random() * 9999) + 1000})
  }

  render() {
    return (
      <div className="modal is-active opt-modal-element">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-header">
              <p className="card-header-title">
                Confirm Your Number
              </p>
            </div>
            <div className="card-content">
              <div className="content text-center">
                <h3>
                  <strong>First time Order</strong>
                </h3>
                <p>
                  Please Confirm your phone number
                </p>
                <br/>
                <div className="otp-input-box">
                  <label className="label">Phone Number</label>
                  <p className="control text-center">
                    <input className="input" type="text" placeholder="082-123-4567"/>
                    <br/>
                    <br/>
                    <button type="button" className="button is-success" onClick={this.randomOtp}>
                      Request OTP
                    </button>
                  </p>
                </div>
                <br/>
                <div className="otp-input-box">
                  <label className="label">Confirmation Code</label>
                  <p className="control">
                    <input className="input" type="text" value={this.state.otpCode} placeholder="XXXX"/>
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item" onClick={this.props.closeModal}>Cancel</a>
              <a className="card-footer-item button is-success" onClick={this.props.confirmOtp}>Confirm</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OtpModal;

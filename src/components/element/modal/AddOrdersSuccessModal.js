import React, { Component } from 'react';

class AddOrdersSuccessModal extends Component {

  render() {
    return (
      <div className="modal is-active order-modal-element">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card is-fullwidth">
            <div className="card-content">
              <div className="content text-center">
                <h3>
                  <strong>Add This order Success</strong>
                </h3>
              </div>
            </div>
            <div className="card-footer">
              <a className="card-footer-item button" onClick={this.props.closeModal}>Close</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddOrdersSuccessModal;

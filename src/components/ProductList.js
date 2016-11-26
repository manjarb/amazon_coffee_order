import React, { Component } from 'react';
import Drinkbox from './box/Drinkbox';
import Searchbox from './element/Searchbox';
import OrderModal from './element/modal/OrderModal';
import OtpModal from './element/modal/OtpModal';

class ProductList extends Component {

  constructor(){
    super();
    this.openOrderModal = this.openOrderModal.bind(this);
    this.closeOrderModal = this.closeOrderModal.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.closeOtpModal = this.closeOtpModal.bind(this);
    this.state = {
      orderModalOpen: false,
      otpModalOpen: false
    }
  }

  openOrderModal(){
    this.setState({orderModalOpen: true});
  }

  closeOrderModal(){
    this.setState({orderModalOpen: false});
  }

  placeOrder(){
    this.setState({orderModalOpen: false});
    this.setState({otpModalOpen: true});
  }

  closeOtpModal(){
    this.setState({otpModalOpen: false});
  }

  componentWillUnmount(){
    this.setState({
      orderModalOpen: false,
      otpModal: false
    })
  }

  render() {

    return (
        <div>
          <Searchbox/>
          <Drinkbox openOrderModal={this.openOrderModal} />
          <Drinkbox openOrderModal={this.openOrderModal} />
          <Drinkbox openOrderModal={this.openOrderModal} />
          <Drinkbox openOrderModal={this.openOrderModal} />
          {this.state.orderModalOpen && <OrderModal closeModal={this.closeOrderModal}
                                                    placeOrder={this.placeOrder}/>}

          {this.state.otpModalOpen && <OtpModal closeModal={this.closeOtpModal} />}
        </div>
    );
  }
}

export default ProductList;

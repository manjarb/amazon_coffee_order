import React, { Component } from 'react';
import Drinkbox from './box/Drinkbox';
import Searchbox from './element/Searchbox';
import OrderModal from './element/modal/OrderModal';
import OtpModal from './element/modal/OtpModal';
import ConfirmOrderModal from './element/modal/ConfirmOrderModal';
import { browserHistory } from 'react-router'

class ProductList extends Component {

  constructor(){
    super();
    this.openOrderModal = this.openOrderModal.bind(this);
    this.closeOrderModal = this.closeOrderModal.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.closeOtpModal = this.closeOtpModal.bind(this);
    this.detailsOrder = this.detailsOrder.bind(this);
    this.confirmOtp = this.confirmOtp.bind(this);
    this.closeConfirmOrderModal = this.closeConfirmOrderModal.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
    this.state = {
      orderModalOpen: false,
      otpModalOpen: false,
      confirmOrderModalOpen: false
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

  closeConfirmOrderModal(){
    this.setState({otpModalOpen: false});
    this.setState({confirmOrderModalOpen: false});
  }

  confirmOtp(){
    this.setState({otpModalOpen: false});
    this.setState({confirmOrderModalOpen: true});
  }

  confirmOrder(){
    console.log('confirmOrder');
    this.setState({confirmOrderModalOpen: false});
    this.context.router.push(`/order/1/success`);
  }

  detailsOrder(){
    this.setState({orderModalOpen: false});
    this.context.router.push(`/shops/1/product/1`);
  }

  componentWillUnmount(){
    this.setState({
      orderModalOpen: false,
      otpModal: false,
      confirmOrderModalOpen: false
    })
  }

  componentDidMount(){
    this.props.updatePreviousPath("/");
    this.props.updateHeaderName("PRODUCTS");
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
                                                    placeOrder={this.placeOrder}
                                                    moreDetailsOrder={this.detailsOrder}/>}
          {this.state.otpModalOpen && <OtpModal closeModal={this.closeOtpModal}
                                                confirmOtp={this.confirmOtp}/>}
          {this.state.confirmOrderModalOpen && <ConfirmOrderModal closeModal={this.closeConfirmOrderModal}
                                                                  confirmOrder={this.confirmOrder}/>}
        </div>
    );
  }
}

ProductList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ProductList;

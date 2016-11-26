import React, { Component } from 'react';
import Drinkbox from './box/Drinkbox';
import Searchbox from './element/Searchbox';
import OrderModal from './element/modal/OrderModal';
import OtpModal from './element/modal/OtpModal';
import ConfirmOrderModal from './element/modal/ConfirmOrderModal';

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
    this.drinks = [];
    this.state = {
      orderModalOpen: false,
      otpModalOpen: false,
      confirmOrderModalOpen: false,
      drink: {},
      status: ""
    }
  }

  openOrderModal(drink,status){
    this.setState({
      orderModalOpen: true,
      drink: drink,
      status: status
    });
  }

  closeOrderModal(){
    this.setState({orderModalOpen: false});
  }

  placeOrder(drink,amount,status){
    this.setState({orderModalOpen: false});
    this.setState({otpModalOpen: true});
    this.props.addOrder(drink,amount,status);
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

    this.drinks = (this.props.shops.filter(x => x.id === parseInt(this.props.params.id, 10)).map(x=> x.drinks))[0];
  }

  render() {

    const drinks = this.drinks;

    return (
        <div>
          <Searchbox placeholder="menu"/>
          {
            drinks.map((drink,index) => <Drinkbox key={index}
                                                  drink={drink}
                                                  shopId={this.props.params.id}
                                                  openOrderModal={this.openOrderModal}/>)
          }

          {this.state.orderModalOpen && <OrderModal closeModal={this.closeOrderModal}
                                                    placeOrder={this.placeOrder}
                                                    moreDetailsOrder={this.detailsOrder}
                                                    drink={this.state.drink}
                                                    status={this.state.status}/>}
          {this.state.otpModalOpen && <OtpModal closeModal={this.closeOtpModal}
                                                confirmOtp={this.confirmOtp}/>}
          {this.state.confirmOrderModalOpen && <ConfirmOrderModal closeModal={this.closeConfirmOrderModal}
                                                                  confirmOrder={this.confirmOrder}
                                                                  order={this.props.order[0]}/>}
        </div>
    );
  }
}

ProductList.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ProductList;

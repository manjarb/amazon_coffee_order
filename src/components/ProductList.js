import React, { Component } from 'react';
import Drinkbox from './box/Drinkbox';
import Searchbox from './element/Searchbox';
import OrderModal from './element/modal/OrderModal';

class ProductList extends Component {

  constructor(){
    super();
    this.openOrderModal = this.openOrderModal.bind(this);
    this.state = {
      orderModalOpen: false
    }
  }

  openOrderModal(){
    this.setState({orderModalOpen: true})
  }

  render() {
      return (
          <div>
            <Searchbox/>
            <Drinkbox openOrderModal={this.openOrderModal} />
            <Drinkbox/>
            <Drinkbox/>
            <Drinkbox/>

            {this.state.orderModalOpen && <OrderModal />}
          </div>
      );
  }
}

export default ProductList;

import React, { Component } from 'react';
import { Link } from 'react-router';
import CoffeeImage from '../images/espresso.jpg';
import AddOrdersSuccessModal from './element/modal/AddOrdersSuccessModal';

class OrderDetails extends Component {

  constructor(){
    super();
    this.addOrder = this.addOrder.bind(this);
    this.closeAddOrderModal = this.closeAddOrderModal.bind(this);
    this.deleteColdAmount = this.deleteColdAmount.bind(this);
    this.addColdAmount = this.addColdAmount.bind(this);
    this.deleteHotAmount = this.deleteHotAmount.bind(this);
    this.addHotAmount = this.addHotAmount.bind(this);
    this.state = {
      openAddOrderSuccessModal: false,
      cold_amount: 4,
      hot_amount: 0
    };
  }

  componentWillMount(){
    this.drinks = (this.props.shops.filter(x => x.id === parseInt(this.props.params.shop_id, 10)).map(x=> x.drinks))[0];
    this.drink = (this.drinks.filter(x => x.id === parseInt(this.props.params.order_id, 10)))[0];
  }

  componentDidMount(){
    this.props.updatePreviousPath("/shops/1");
    this.props.updateHeaderName("DETAILS");

  }

  addOrder(){
    this.setState({openAddOrderSuccessModal: true});
  }

  closeAddOrderModal(){
    this.setState({openAddOrderSuccessModal: false});
  }

  deleteColdAmount(){
    if(this.state.cold_amount > 0){
      this.setState({cold_amount: this.state.cold_amount - 1});
    }
  }

  addColdAmount(){
    this.setState({cold_amount: this.state.cold_amount + 1});
  }

  deleteHotAmount(){
    if(this.state.hot_amount > 0){
      this.setState({hot_amount: this.state.hot_amount - 1});
    }
  }

  addHotAmount(){
    this.setState({hot_amount: this.state.hot_amount + 1});
  }

  render() {
    return (
      <div>
        <div className="product-details-box">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.drink.coffee_image} alt={this.drink.name}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h3>
                    <strong>{this.drink.name}</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean efficitur sit amet massa fringilla egestas.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="product-order-details-box">
            <div className="columns is-mobile">
              <div className="column">
                <h4 className="blue-text">
                  Cold
                </h4>
              </div>
              <div className="column">
                <div className="modal-order-amount-box text-center">
                  <div className="columns is-mobile">
                    <div className="column">
                      <button type="button" onClick={this.deleteColdAmount} className="button is-danger">
                        -
                      </button>
                    </div>
                    <div className="column">
                      {this.state.cold_amount}
                    </div>
                    <div className="column">
                      <button type="button" onClick={this.addColdAmount} className="button is-success">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <Link to="/shops/1/product/1/customize">
                  <p className="link">
                    Customize your Coffee
                  </p>
                </Link>
              </div>
              <div className="column">
                <p className="text-right">
                  <strong>120 Baht</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="product-order-details-box">
            <div className="columns is-mobile">
              <div className="column">
                <h4 className="red-text">
                  HOT
                </h4>
              </div>
              <div className="column">
                <div className="modal-order-amount-box text-center">
                  <div className="columns is-mobile">
                    <div className="column">
                      <button type="button" onClick={this.deleteHotAmount} className="button is-danger">
                        -
                      </button>
                    </div>
                    <div className="column">
                      {this.state.hot_amount}
                    </div>
                    <div className="column">
                      <button type="button" onClick={this.addHotAmount} className="button is-success">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <Link to="shops/1/product/1/customize">
                  <p className="link">
                    Customize your Coffee
                  </p>
                </Link>
              </div>
              <div className="column">
                <p className="text-right">
                  <strong>280 Baht</strong>
                </p>
              </div>
            </div>
          </div>
{/*
          <div className="product-order-details-box">
            <div className="columns is-mobile">
              <div className="column">
                <h4 className="green-text">
                  Frappe
                </h4>
              </div>
              <div className="column">
                <div className="modal-order-amount-box text-center">
                  <div className="columns is-mobile">
                    <div className="column">
                      <button type="button" className="button is-danger">
                        -
                      </button>
                    </div>
                    <div className="column">1</div>
                    <div className="column">
                      <button type="button" className="button is-success">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <Link to="shops/1/product/1/customize">
                  <p className="link">
                    Customize your Coffee
                  </p>
                </Link>
              </div>
              <div className="column">
                <p className="text-right">
                  <strong>300 Baht</strong>
                </p>
              </div>
            </div>
          </div>
*/}
          <div className="extra-request-box">
            <h3>
              <strong>Extra Request</strong>
            </h3>
            <p className="control">
              <textarea className="textarea" placeholder="Ex. Plastic bags please"/>
            </p>
          </div>
          <div className="product-details-total-price-box">
            <p><strong>TOTAL: &nbsp; 480 Baht</strong></p>
          </div>
          <div className="button-submit-product-details-box">
            <Link to="/user/orders">
              <button className="button is-success">Buy Now</button>
            </Link>
            <button className="button is-info" onClick={this.addOrder}>Add to your Orders</button>
          </div>
        </div>
        {this.state.openAddOrderSuccessModal && <AddOrdersSuccessModal
                                                  closeModal={this.closeAddOrderModal}/>}
      </div>
    );
  }
}

export default OrderDetails;

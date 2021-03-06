import React, { Component } from 'react';
import { Link } from 'react-router';

class Drinkbox extends Component {

  constructor(){
    super();
    this.openModal = this.openModal.bind(this);
  }

  openModal(drink,status){
    this.props.openOrderModal(drink,status);
  }

  render() {
    return (
      <div className="box drink-element-box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.drink.coffee_image} alt={this.props.drink.name}/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <Link to={`/shops/${this.props.shopId}/product/${this.props.drink.id}`}>
                <h3>
                  <strong>{this.props.drink.name}</strong>
                </h3>
              </Link>
              <div className="drink-order-menu-label">
                <div className="columns is-mobile text-center">
                  <div className="column">
                    <h4 className="blue-text">Cold</h4>
                    <button className="button is-info" href="#" onClick={() => this.openModal(this.props.drink,"cold")}>
                      <p>{this.props.drink.cold.price}</p>
                    </button>
                  </div>
                  <div className="column">
                    <h4 className="red-text">Hot</h4>
                    <button className="button is-danger" onClick={() => this.openModal(this.props.drink,"hot")}>
                      <p>{this.props.drink.hot.price}</p>
                    </button>
                  </div>
                  <div className="column">
                    <h4 className="green-text">Frappe</h4>
                    <button className="button is-success" onClick={() => this.openModal(this.props.drink,"frappe")}>
                      <p>{this.props.drink.frappe.price}</p>
                    </button>
                  </div>
                  <div className="column">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Drinkbox;

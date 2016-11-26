import React, { Component } from 'react';
import CoffeeImage from '../../images/espresso.jpg';
import { Link } from 'react-router';

class Drinkbox extends Component {

  constructor(){
    super();
    this.openModal = this.openModal.bind(this);
  }

  openModal(){
    this.props.openOrderModal();
  }

  render() {
    return (
      <div className="box drink-element-box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={CoffeeImage} alt="Siam paragon"/>
            </figure>
            <h2 className="text-center">
              <strong>0.5 KM</strong>
            </h2>
          </div>
          <div className="media-content">
            <div className="content">
              <Link to="/shops/1/product/1">
                <h3>
                  <strong>Expresso</strong>
                </h3>
              </Link>
              <div className="drink-order-menu-label">
                <div className="columns is-mobile text-center">
                  <div className="column">
                    <button href="#" onClick={this.openModal}>
                      <h4 className="blue-text">Cold</h4>
                      <p className="button is-info">50</p>
                    </button>
                  </div>
                  <div className="column">
                    <button href="#" onClick={this.openModal}>
                      <h4 className="red-text">Hot</h4>
                      <p className="button is-danger">60</p>
                    </button>
                  </div>
                  <div className="column">
                    <button href="#" onClick={this.openModal}>
                      <h4 className="green-text">Frappe</h4>
                      <p className="button is-success">70</p>
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

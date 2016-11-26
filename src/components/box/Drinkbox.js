import React, { Component } from 'react';
import CoffeeImage from '../../images/espresso.jpg';

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
              <h3>
                <strong>Expresso</strong>
              </h3>
              <div className="drink-order-menu-label">
                <div className="columns is-mobile text-center">
                  <div className="column">
                    <a href="#" onClick={this.openModal}>
                      <h4 className="blue-text">Cold</h4>
                      <button className="button is-info">50</button>
                    </a>
                  </div>
                  <div className="column">
                    <a href="#" onClick={this.openModal}>
                      <h4 className="red-text">Hot</h4>
                      <button className="button is-danger">60</button>
                    </a>
                  </div>
                  <div className="column">
                    <a href="#" onClick={this.openModal}>
                      <h4 className="green-text">Frappe</h4>
                      <button className="button is-success">70</button>
                    </a>
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

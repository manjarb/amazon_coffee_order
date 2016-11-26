import React, { Component } from 'react';
import { Link } from 'react-router';
import CoffeeImage from '../images/espresso.jpg';

class OrderDetails extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/shops/1");
    this.props.updateHeaderName("DETAILS");
  }

  render() {
    return (
      <div className="product-details-box">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={CoffeeImage} alt="Espresso"/>
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <h3>
                  <strong>Espresso</strong>
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
                <strong>280 Baht</strong>
              </p>
            </div>
          </div>
        </div>
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
        <div className="extra-request-box">
          <h3>
            Extra Request
          </h3>
          <p className="control">
            <textarea className="textarea" placeholder="Ex. Plastic bags please"/>
          </p>
        </div>
      </div>
    );
  }
}

export default OrderDetails;

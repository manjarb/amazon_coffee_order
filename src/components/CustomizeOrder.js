import React, { Component } from 'react';
import { Link } from 'react-router';
import CoffeeImage from '../images/espresso.jpg';

class CustomizeOrder extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/shops/1/product/1");
    this.props.updateHeaderName("CUSTOMIZE");
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
                  4 Cups
                </p>
              </div>
            </div>
          </article>
        </div>
        <div className="product-order-details-box">
          <div className="product-order-details-wrapper">
            <h4>
              1 ST Cup
            </h4>
            <br/>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>- Sugar Level</strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>Light</option>
                      <option>Normal</option>
                      <option>Strong</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>
                    - Extra Shots <br/>
                    (20 Baht per a shot)
                  </strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-order-details-box">
          <div className="product-order-details-wrapper">
            <h4>
              2 ND Cup
            </h4>
            <br/>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>- Sugar Level</strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>Light</option>
                      <option>Normal</option>
                      <option>Strong</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>
                    - Extra Shots <br/>
                    (20 Baht per a shot)
                  </strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-order-details-box">
          <div className="product-order-details-wrapper">
            <h4>
              3 RD Cup
            </h4>
            <br/>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>- Sugar Level</strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>Light</option>
                      <option>Normal</option>
                      <option>Strong</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>
                    - Extra Shots <br/>
                    (20 Baht per a shot)
                  </strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-order-details-box">
          <div className="product-order-details-wrapper">
            <h4>
              4 TH Cup
            </h4>
            <br/>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>- Sugar Level</strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>Light</option>
                      <option>Normal</option>
                      <option>Strong</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <p>
                  <strong>
                    - Extra Shots <br/>
                    (20 Baht per a shot)
                  </strong>
                </p>
              </div>
              <div className="column">
                <p className="control text-right">
                  <span className="select">
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="button-submit-product-details-box">
          <Link to="/shops/1/product/1">
            <button className="button is-info">Finish Customize</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CustomizeOrder;

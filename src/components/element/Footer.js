import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                <div className="columns is-mobile">
                    <div className="column footer-right-border">
                        <Link to="/">
                            <i className="fa fa-shopping-basket" />
                            <br/>
                            Coffee shop
                        </Link>
                    </div>
                    <div className="column">
                        <Link to="/user/orders">
                            <i className="fa fa-shopping-cart" />
                            <br/>
                            Your Orders
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

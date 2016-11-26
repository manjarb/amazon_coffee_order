import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="text-center">
                <div className="columns is-mobile">
                    <div className="column">
                        <i className="fa fa-shopping-basket" />
                        <br/>
                        Shop
                    </div>
                    <div className="column">
                        <i className="fa fa-shopping-cart" />
                        <br/>
                        Cart
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

import React, { Component } from 'react';
import Shopbox from './box/Shopbox';
import { Link } from 'react-router';
import Searchbox from './element/Searchbox';

class Homepage extends Component {

  componentDidMount(){
    this.props.updatePreviousPath("/");
    this.props.updateHeaderName("CHOOSE STORE");
  }

  render() {

    const shops = this.props.shops;

    return (
        <div>
          <Searchbox placeholder="Location"/>
          {
            shops.map((shop,index) => <Link to={`/shops/${shop.id}`} key={index}><Shopbox shop={shop} /></Link>)
          }
        </div>
    );
  }
}

export default Homepage;

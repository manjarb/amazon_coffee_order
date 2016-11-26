import React, { Component } from 'react';
import Shopbox from './box/Shopbox';
import { Link } from 'react-router';
import Searchbox from './element/Searchbox';

class Homepage extends Component {

  componentDidMount(){
    this.props.updatePreviousPath(this.props.location.pathname);
  }

  render() {
      return (
          <div>
            <Searchbox/>
            <Link to="/shops/1">
                <Shopbox />
            </Link>
            <Link to="/shops/1">
              <Shopbox />
            </Link>
            <Link to="/shops/1">
              <Shopbox />
            </Link>
            <Link to="/shops/1">
              <Shopbox />
            </Link>
          </div>
      );
  }
}

export default Homepage;

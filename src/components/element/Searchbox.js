import React, { Component } from 'react';

class Searchbox extends Component {
  render() {
    return (
      <section className="shop-search-box">
        <p className="control has-icon">
          <input className="input" type="text" placeholder="Location"/>
          <i className="fa fa-search"/>
        </p>
      </section>
    );
  }
}

export default Searchbox;

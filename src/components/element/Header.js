import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

    enableBack(path){
        if(path === "/"){
          return false;
        } else {
          return true;
        }
    }

    render() {
        return (
            <header className="text-center">
                { this.enableBack(this.props.currentPath) &&
                  <Link to={this.props.previousPath}>
                    <div className="back-menu-bt">
                      <i className="fa fa-angle-left" />
                    </div>
                  </Link>
                }
              <h1><strong>SHOPS</strong></h1>
            </header>
        );
    }
}

export default Header;

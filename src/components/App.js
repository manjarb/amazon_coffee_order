import React, { Component } from 'react';
import Header from './element/Header';
import Footer from './element/Footer';

class App extends Component {

  constructor(){
    super();
    this.updatePreviousPath = this.updatePreviousPath.bind(this);
    this.updateHeaderName = this.updateHeaderName.bind(this);
    this.state = {
      previousPath: "/",
      headerName: "AMAZON",
      shop: [
        {
          "id": 1,
          "thumbnail": "http://seeklogo.com/images/P/PTT-logo-706A0DD088-seeklogo.com.gif",
          "distance": 0.1,
          "location": "Machias",
          "name": "Bostonic",
          "waiting_number": 9
        },
        {
          "id": 9,
          "thumbnail": "http://www.top-world-news.com/wp-content/uploads/2011/02/Logo06603207001524_pttme-300x215.jpg",
          "distance": 0.2,
          "location": "Muir",
          "name": "Artworlds",
          "waiting_number": 6
        },
        {
          "id": 7,
          "thumbnail": "https://upload.wikimedia.org/wikipedia/en/f/f4/Robinsonlogo.jpg",
          "distance": 0.3,
          "location": "Cresaptown",
          "name": "Zentry",
          "waiting_number": 5
        },
        {
          "id": 3,
          "thumbnail": "http://www.earthdezign.com/wp-content/uploads/2014/02/Siam-Paragon-574x340.jpg",
          "distance": 0.4,
          "location": "Hobucken",
          "name": "Senmao",
          "waiting_number": 9
        },
        {
          "id": 2,
          "thumbnail": "http://logosandbrands.directory/wp-content/themes/directorypress/thumbs/The-Mall-Group-logo.jpg",
          "distance": 0.5,
          "location": "Sedley",
          "name": "Springbee",
          "waiting_number": 6
        }
      ]
    }
  }

  updatePreviousPath(path){
    this.setState({previousPath: path});
  }

  updateHeaderName(name){
    this.setState({headerName: name})
  }

  render() {
    return (
      <div className="App">
          <Header currentPath={this.props.location.pathname}
                  previousPath={this.state.previousPath}
                  headerName={this.state.headerName} />
            <div className="content-container">
              {React.cloneElement(this.props.children, {
                updatePreviousPath: this.updatePreviousPath,
                updateHeaderName: this.updateHeaderName,
                shops: this.state.shop
              })}
            </div>
          <Footer />
      </div>
    );
  }
}

export default App;

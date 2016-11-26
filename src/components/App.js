import React, { Component } from 'react';
import Header from './element/Header';
import Footer from './element/Footer';

class App extends Component {

  constructor(){
    super();
    this.updatePreviousPath = this.updatePreviousPath.bind(this);
    this.updateHeaderName = this.updateHeaderName.bind(this);

    const drinks = [
                    {
                      "id": 1,
                      "name": "Americano",
                      "coffee_image": "http://www.medicalnewstoday.com/content/images/articles/311/311569/coffee.jpg",
                      "hot": {
                        "price": 50
                      },
                      "cold": {
                        "price": 60
                      },
                      "frappe": {
                        "price": 70
                      }
                    },
                    {
                      "id": 2,
                      "name": "Cappuccino",
                      "coffee_image": "http://cms.kalbhi.com/admin/data/blog_img/3167451501594b973_download.jpg",
                      "hot": {
                        "price": 60
                      },
                      "cold": {
                        "price": 70
                      },
                      "frappe": {
                        "price": 80
                      }
                    },
                    {
                      "id": 3,
                      "name": "Espresso",
                      "coffee_image": "http://www.goodmorningcoffee.com/images/CoffeeCup.png",
                      "hot": {
                        "price": 50
                      },
                      "cold": {
                        "price": 60
                      },
                      "frappe": {
                        "price": 70
                      }
                    },
                    {
                      "id": 4,
                      "name": "Turkish coffee",
                      "coffee_image": "http://sawadacoffee.com/wp-content/uploads/Sawada-Coffee-10DEC2015-004.jpg",
                      "hot": {
                        "price": 70
                      },
                      "cold": {
                        "price": 80
                      },
                      "frappe": {
                        "price": 90
                      }
                    },
                    {
                      "id": 5,
                      "name": "Vienna coffee",
                      "coffee_image": "https://www.coffee.net/media/blog/1463491933716765929.jpg",
                      "hot": {
                        "price": 100
                      },
                      "cold": {
                        "price": 110
                      },
                      "frappe": {
                        "price": 120
                      }
                    },
                    {
                      "id": 6,
                      "name": "Kopi Luwak",
                      "coffee_image": "http://www.contrastleiden.nl/wp-content/uploads/2015/04/coffee_art1.jpg",
                      "hot": {
                        "price": 50
                      },
                      "cold": {
                        "price": 60
                      },
                      "frappe": {
                        "price": 70
                      }
                    }
                  ];

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
          "waiting_number": 9,
          "drinks": drinks
        },
        {
          "id": 9,
          "thumbnail": "http://www.top-world-news.com/wp-content/uploads/2011/02/Logo06603207001524_pttme-300x215.jpg",
          "distance": 0.2,
          "location": "Muir",
          "name": "Artworlds",
          "waiting_number": 6,
          "drinks": drinks
        },
        {
          "id": 7,
          "thumbnail": "https://upload.wikimedia.org/wikipedia/en/f/f4/Robinsonlogo.jpg",
          "distance": 0.3,
          "location": "Cresaptown",
          "name": "Zentry",
          "waiting_number": 5,
          "drinks": drinks
        },
        {
          "id": 3,
          "thumbnail": "http://www.earthdezign.com/wp-content/uploads/2014/02/Siam-Paragon-574x340.jpg",
          "distance": 0.4,
          "location": "Hobucken",
          "name": "Senmao",
          "waiting_number": 9,
          "drinks": drinks
        },
        {
          "id": 2,
          "thumbnail": "http://logosandbrands.directory/wp-content/themes/directorypress/thumbs/The-Mall-Group-logo.jpg",
          "distance": 0.5,
          "location": "Sedley",
          "name": "Springbee",
          "waiting_number": 6,
          "drinks": drinks
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

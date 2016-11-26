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
      headerName: "AMAZON"
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
                updateHeaderName: this.updateHeaderName
              })}
            </div>
          <Footer />
      </div>
    );
  }
}

export default App;

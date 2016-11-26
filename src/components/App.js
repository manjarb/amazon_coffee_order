import React, { Component } from 'react';
import Header from './element/Header';
import Footer from './element/Footer';

class App extends Component {

  constructor(){
    super();
    this.updatePreviousPath = this.updatePreviousPath.bind(this);
    this.state = {
        previousPath: "/"
    }
  }

  updatePreviousPath(path){
    this.setState({previousPath: path})
  }

  render() {
    return (
      <div className="App">
          <Header currentPath={this.props.location.pathname} previousPath={this.state.previousPath}/>
            <div className="content-container">
              {React.cloneElement(this.props.children, { updatePreviousPath: this.updatePreviousPath })}
            </div>
          <Footer />
      </div>
    );
  }
}

export default App;

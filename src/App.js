import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
class App extends Component{
    render() {
      return (
          <div className="App">
              <div>
                  <h1>{this.props.headerProp}</h1>
                  <h2>{this.props.contentProp}</h2>
              </div>
          </div>
      );
    }
}

// export default App;

App.defaultProps = {
    headerProp: "Header from props...",
    contentProp:"Content from props..."
}

export default App;
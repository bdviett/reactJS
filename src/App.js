import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from state...",
            content: "Content from state..."
        }
    }
  render() {
      return (
          <div className="App">
              <div>
                  <Header headerProp = {this.state.header}/>
                  <Content contentProp = {this.state.content}/>
              </div>
          </div>
      );
  }
}

export default App;

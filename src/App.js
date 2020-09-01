import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddComponent from "./components/AddComponent"
import EditComponent from "./components/EditComponent"
import ListComponent from "./components/ListComponent"

class App extends Component{
    render () {
        return (
            <Router>
                <div>
                    <nav className="nav navbar-expand navbar-dark bg-dark">
                        <a href="/list" className="navbar-brand">
                            React JS CRUD
                        </a>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/list"} className="nav-link">
                                    List Job
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/add"} className="nav-link">
                                    Add Job
                                </Link>
                            </li>
                        </div>
                    </nav>

                    <div className="container mt-3">
                        <Switch>
                            <Router exact path={["/", "/list"]} component={ListComponent} />
                            <Router exact path="/add" component={AddComponent} />
                            <Router path="/edit/:id" component={EditComponent} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

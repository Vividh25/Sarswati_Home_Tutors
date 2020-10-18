import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Carousel";
import Home from "./components/Home";
import Price from "./components/Price";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/about">
                        <h1>About Page</h1>
                    </Route>
                    <Route path="/services">
                        <h1>Service Page</h1>
                    </Route>
                    <Route path="/pricing">
                        <Price />
                    </Route>
                    <Route path="/">
                        <Jumbotron />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

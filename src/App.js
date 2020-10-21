import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Jumbotron from "./components/Carousel";
import Home from "./components/Home";
import Price from "./components/Price";
import Footer from "./components/Footer";
import Register from "./components/Register";

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
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/">
                        <Jumbotron />
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

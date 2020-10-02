import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Contact from "./contents/Contact";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        
      </Router>
    );
  }
}

export default App;

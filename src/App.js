import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main className="page-container">
          <Router>
            <Homepage path="/" />
            <Work path="/work" />
            <About path="/about" />
            <Contact path="/contact" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;

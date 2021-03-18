import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Projects" exact component={Project} />
            <Route path="/Contact" exact component={Contact} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

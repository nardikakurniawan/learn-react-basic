import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";

// import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/reports" exact element={<Reports />} />
            <Route path="/products" exact element={<Products />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

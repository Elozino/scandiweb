import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Pdp from "./pages/Pdp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={< Category />} />
            <Route path="/pages/pdp" element={< Pdp />} />
            <Route path="/pages/cart" element={< Cart />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

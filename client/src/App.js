import React from "react";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Cart from "./pages/Cart";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Category />
        <Cart />
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;

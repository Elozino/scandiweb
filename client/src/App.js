import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Pdp from "./pages/Pdp";
import { getAllProducts, moneySymbol } from "./redux/actions/ProductAction";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query{
            category{
              name,
              products{
                id,
                name,
                gallery,
                description,
                category,
                brand,
                prices{
                  currency{
                    label
                    symbol
                  }
                  amount,
                }
              }
            }
            currencies{
              label
              symbol
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        let query = result.data.category.products;
        this.props.getAllProducts([...query]);
        let money = result.data.currencies;
        this.props.moneySymbol([...money]);
      });
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Category />} />
            <Route path="/pages/pdp" element={<Pdp />} />
            <Route path="/pages/cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => ({
  // The state
  products: state.products,
  money: state.money,
});

const mapActionToProps = {
  //The action
  getAllProducts,
  moneySymbol,
};

export default connect(mapStateToProps, mapActionToProps)(App);

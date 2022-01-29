import React from "react";
// import { Link } from 'react-router-dom';
import style from "../styles/pdp.module.css";
// import { useLocation } from "react-router-dom"
import { connect } from "react-redux";
import { addToCart, singleItem } from "../redux/actions/ProductAction";
import HTMLReactParser from "html-react-parser";
// import { useHistory } from "react-router-dom";

class Pdp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleCart(item) {
    // We can now pick the price the name etc
    this.props.addToCart([...this.props.cart, item]);
    console.log(item);
  }

  render() {
    // const { selectedItem } = this.state;
    console.log(this.props.selectedItem);
    return (
      <div className={style.container}>
        <div className={style.image_container}>
          <div className={style.side_image}>
            <img src={this.props.selectedItem.gallery} alt="Item_side" />
            <img src={this.props.selectedItem.gallery} alt="Item_side" />
            <img src={this.props.selectedItem.gallery} alt="Item_side" />
          </div>

          <div className={style.image}>
            <img src={this.props.selectedItem.gallery} alt="Item_side" />
          </div>
        </div>

        <div className={style.cart}>
          <p className={`${style.item_name} ${style.bold}`}>
            {this.props.selectedItem.brand}
          </p>
          <br />
          <p className={`${style.item_name}`}>{this.props.selectedItem.name}</p>

          <br />

          <div className="sizes">
            <p className={style.bold}>SIZE:</p>
            <br />
            <div className={style.btn}>
              <button>XS</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
            </div>
          </div>
          <br />
          <br />
          <div className="price">
            <p className={style.bold}>PRICE:</p>
            <br />
            <p className={style.bold}>
              {this.props.selectedItem.prices[0].currency.symbol}{" "}
              {this.props.selectedItem.prices[0].amount}
            </p>
            <br />
            <div>
              <button
                className={style.btn_cart}
                onClick={() => this.handleCart(this.props.selectedItem)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <br />
          <div className={style.description}>
            <p>
              {HTMLReactParser(this.props.selectedItem.description)}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // The state
  cart: state.products.cart,
  selectedItem: state.products.selectedItem,
});

const mapActionToProps = {
  //The action
  addToCart,
  singleItem,
};

export default connect(mapStateToProps, mapActionToProps)(Pdp);

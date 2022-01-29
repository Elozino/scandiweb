import React from "react";
import style from "../styles/card.module.css";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addToCart,
  selectedItem,
  singleItem,
} from "../redux/actions/ProductAction";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCart(item) {
    console.log(item);
    //We can now pick the price the name etc
    this.props.addToCart([...this.props.cart, item]);
  }

  // handleSingleItem(item) {
  //   this.props.singleItem([...item])
  // }

  // onClick={() => this.handleSingleItem(this.props.item)}

  render() {
    return (
      <>
        <div className={style.card_container}>
          <Link
            to={{
              pathname: "/pages/pdp",
              state: { test: "This is a test message" },
            }}
            className={style.link}
            onClick={() => this.props.selectedItem(this.props.item)}
          >
            {/**Real data to be fetch from the server */}
            <div className={style.card_item}>
              <div>
                <img
                  src={this.props.item.gallery}
                  alt={this.props.item.name}
                  className={style.card_image}
                />
              </div>
              <p
                className={style.item}
              >{`${this.props.item.brand} ${this.props.item.name}`}</p>
              <p className={style.price}>
                {this.props.item.prices[0].currency.symbol}
                {this.props.item.prices[0].amount}
              </p>
            </div>
          </Link>
          <div
            className={style.hover_icon}
            onClick={() => this.handleCart(this.props.item)}
          >
            <BsCart2 />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  // The state
  cart: state.products.cart,
});

const mapActionToProps = {
  //The action
  addToCart,
  singleItem,
  selectedItem,
};
export default connect(mapStateToProps, mapActionToProps)(Card);

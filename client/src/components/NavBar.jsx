import React from "react";
import logo from "../assets/a-logo.svg";
import * as Icon from "react-icons/bs";
import style from "../styles/navbar.module.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      cart: false,
      classToHide: true,
    };
  }

  render() {
    // The products here is from product: ProductReducer
    const currency = this.props.products.money;
    // console.log(currency);

    return (
      <nav className={`${style.flex} ${style.cart_wrapper}`}>
        <div className={`${style.flex} ${style.nav_link}`}>
          <p className={style.active}>WOMEN</p>
          <p>MEN</p>
          <p>KIDS</p>
        </div>
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`${style.flex} ${style.icon}`}>
          <div className={style.flex}>
            <span>
              <Icon.BsCurrencyDollar />
            </span>
            <span
              onClick={() => {
                this.setState({ clicked: !this.state.clicked });
              }}
            >
              {this.state.clicked ? (
                <Icon.BsArrowDownShort />
              ) : (
                <Icon.BsArrowUpShort />
              )}
            </span>
          </div>
          <div className={this.state.clicked ? style.position : style.none}>
            {currency.map((money) => (
              <p className={style.currency}>
                <span className={style.symbol}>{money.symbol} </span>
                <span>{money.label}</span>
              </p>
            ))}
          </div>

          <span>
            <div
              className={style.cart_icon}
              onClick={() => {
                this.setState({ cart: !this.state.cart });
              }}
            >
              <Icon.BsCart2 />
              <small className={style.item_in_cart}>
                {this.props.cart.length}
              </small>
            </div>
            {this.state.cart ? <Modal cartItem={this.props.cart} /> : ""}
          </span>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  // The state
  cart: state.products.cart,
  products: state.products,
  money: state.money,
});

export default connect(mapStateToProps)(NavBar);

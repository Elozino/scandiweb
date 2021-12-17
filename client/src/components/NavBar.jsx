import React from 'react';
import logo from '../assets/a-logo.svg'
import * as Icon from 'react-icons/bs'
import style from '../styles/navbar.module.css'
// import CartList from './CartList'
import Modal from './Modal';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      cart: false
    }
  }

  render() {
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
            <span onClick={() => { this.setState({ clicked: !this.state.clicked }) }}>
              {this.state.clicked ? <Icon.BsArrowDownShort /> : <Icon.BsArrowUpShort />}
            </span>
          </div>
          <span>
            <div className={style.cart_icon} onClick={() => { this.setState({ cart: !this.state.cart }) }}>
              <Icon.BsCart2 />
              <small className={style.item_in_cart}>1</small>
            </div>
            {this.state.cart ? <Modal /> : ""}
          </span>
        </div>
      </nav>

    );
  }
}

export default NavBar;


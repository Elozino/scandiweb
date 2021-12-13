import React from 'react';
import logo from '../assets/a-logo.svg'
import * as Icon from 'react-icons/bs'
import style from '../styles/navbar.module.css'
import CartList from './CartList'


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
          <img src={logo} alt="logo" />
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
            <Icon.BsCart2 onClick={() => { this.setState({ cart: !this.state.cart }) }} />
            {this.state.cart ? (
              <div className={style.cart_modal}>
                <div className={style.cart}>
                  <p className={style.cart_title}>My Bag, 2 items</p>
                  <div>
                    <CartList brand="Apollo" title="Running short" price="$50" />
                    <CartList brand="Apollo" title="Running short" price="$50" />
                  </div>
                  <div className={`${style.flex} ${style.cart_price}`}>
                    <p>Total</p>
                    <p>$100.00</p>
                  </div>
                  <div className={`${style.flex} ${style.cart_button}`}>
                    <button>VIEW BAG</button>
                    <button>CHECK OUT</button>
                  </div>
                </div>
              </div>
            ) : ""}
          </span>
        </div>
      </nav>

    );
  }
}

export default NavBar;


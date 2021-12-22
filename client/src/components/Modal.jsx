import React from 'react';
import CartList from './CartList';
import style from '../styles/navbar.module.css'


class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
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
    );
  }
}

export default Modal;
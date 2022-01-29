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
          <p className={style.cart_title}>My Bag, {this.props.cartItem.length} items</p>
          <div>
            {this.props.cartItem.map((item) => (
              <CartList key={item?.id} brand={item?.name} title={item?.title} price={item?.price} image={item?.gallery} />
            ))}
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
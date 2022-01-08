import React from 'react';
import CartList from '../components/CartList';
import style from '../styles/cart.module.css'

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <div className={style.cart}>
          <CartList
            brand="Apollo"
            itemTitle="Running Short"
            price="$50"
          />
          {/* {this.props.cartItem.map((item) => (
            <CartList key={item.id} brand={item.name} title={item.title} price={item.price} image={item.gallery} />
          ))}
          <CartList
            brand="Jupiter"
            itemTitle="Wayfarer"
            price="$75"
          /> */}
        </div>
      </div>
    );
  }
}

export default Cart;
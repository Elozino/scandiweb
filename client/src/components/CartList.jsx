import React from 'react';
// import item from '../assets/Product Card/ProductB.png'
import style from '../styles/cartList.module.css'

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0,
    }
  }

  addToCart() {
    this.setState({ counter: this.state.counter + 1 })
  }

  removeFromCart() {
    if (this.state.counter === 0) {
      this.setState({ counter: 0 })
    }
    else {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  // onClick={() => this.inCrementCounter}
  render() {
    return (
      <div className={style.cart_list}>
        <div className={style.product_details}>
          <p className={style.item_brand}>{this.props.brand}</p>
          <p className={style.item_title}>{this.props.itemTitle}</p>
          <p className={style.item_price}>{this.props.price}</p>
          <div>
            <button className={`${style.btn_size} `}>S</button>
            <button className={`${style.btn_size} ${style.active}`}>M</button>
          </div>
        </div>

        <div className={style.product_image}>
          <p>
            <button onClick={() => { this.addToCart() }}>+</button>
            <span>{this.state.counter}</span>
            <button onClick={() => { this.removeFromCart() }}>-</button>
          </p>
          <div className={style.product_img}>
            <img src={this.props.image} alt="item" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;

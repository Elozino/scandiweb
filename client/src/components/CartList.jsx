import React from 'react';
import item from '../assets/Product Card/ProductB.png'
import style from '../styles/cartList.module.css'

class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }
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
            <button>+</button>
            <span>1</span>
            <button>-</button>
          </p>
          <div className={style.product_img}>
            <img src={item} alt="item" />
          </div>
        </div>
      </div>
    );
  }
}

export default CartList;

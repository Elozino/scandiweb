import React from 'react';
import { Link } from 'react-router-dom';
import image from "../assets/Product Card/ProductB.png"
import style from '../styles/pdp.module.css'

class Pdp extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.image_container}>
          <div className={style.side_image}>
            <img src={image} alt="Item_side" />
            <img src={image} alt="Item_side" />
            <img src={image} alt="Item_side" />
          </div>

          <div className={style.image}>
            <img src={image} alt="Item" />
          </div>
        </div>

        <div className={style.cart}>
          <p className={`${style.item_name} ${style.bold}`}>Apollo</p>
          <br />
          <p className={`${style.item_name}`}>Running Short</p>

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
            <p className={style.bold}>$50.00</p>
            <br />
            <div >
              <Link to="/pages/cart">
                <button className={style.btn_cart}>ADD TO CART</button>
              </Link>
            </div>
          </div>
          <br />
          <div className={style.description}>
            <p>Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pdp;
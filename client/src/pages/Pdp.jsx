import React from 'react';
// import { Link } from 'react-router-dom';
import style from '../styles/pdp.module.css'
// import { useLocation } from "react-router-dom"
import { connect } from 'react-redux';
import { addToCart, singleItem } from "../redux/actions/ProductAction"

class Pdp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleCat(item) {
    console.log(item);
    //We can now pick the price the name etc
    // this.props.addToCart([...this.props.cart, item])
  }



  render() {
    
    return (
      <div className={style.container}>
        <div className={style.image_container}>
          <div className={style.side_image}>
            <img src={this.props.gallery} alt="Item_side" />
            <img src={this.props.gallery} alt="Item_side" />
            <img src={this.props.gallery} alt="Item_side" />
          </div>

          <div className={style.image}>
            <img src={this.props.gallery} alt="Item_side" />
          </div>
        </div>

        <div className={style.cart}>
          <p className={`${style.item_name} ${style.bold}`}>Apollo</p>
          <br />
          <p className={`${style.item_name}`}>Running shorts</p>

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
              <button className={style.btn_cart} onClick={() => this.handleCat(this.props.item)}>ADD TO CART</button>
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


const mapStateToProps = (state) => ({
  // The state
  cart: state.products.cart,
})

const mapActionToProps = {
  //The action
  addToCart,
  singleItem
}
export default connect(mapStateToProps, mapActionToProps)(Pdp)

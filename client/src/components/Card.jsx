import React from 'react';
// import Product1 from '../assets/Product Card/ProductA.png'
import style from '../styles/card.module.css'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, singleItem } from "../redux/actions/ProductAction"


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleCart(item) {

    console.log(item);
    //We can now pick the price the name etc
    this.props.addToCart([...this.props.cart, item])
  }

  handleSingleItem(item) {
    this.props.singleItem([...item])
  }


  render() {
    return (
      <>
        <div className={style.card_container}>
          <Link to={{ pathname: "/pages/pdp", state: this.props.item }} className={style.link} onClick={() => this.handleSingleItem(this.props.item)}>
            {/**Real data to be fetch from the server */}
            <div className={style.card_item}>
              <div>
                <img src={this.props.item.gallery} alt={this.props.item.name} className={style.card_image} />
              </div>
              <p className={style.item}>{`${this.props.item.brand} ${this.props.item.name}`}</p>
              <p className={style.price}>{this.props.item.price}</p>
            </div>
          </Link>
          <div className={style.hover_icon} onClick={() => this.handleCart(this.props.item)}>
            <BsCart2 />
          </div>
        </div>
      </>
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
export default connect(mapStateToProps, mapActionToProps)(Card)
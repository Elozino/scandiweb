import React from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import style from '../styles/catergory.module.css'
import { getAllProducts } from "../redux/actions/ProductAction"



class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // itemList: [],
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query{
            category{
              products{
                brand
                gallery
                name
                id
                prices{
                  currency
                  amount
                }
              }
            }
          }
      `
      })
    })
      .then((res) => res.json())
      .then((result) => {
        let query = result.data.category.products
        this.props.getAllProducts([...query])
        // query.map((itemList) => (
        //   this.setState(itemList)
        // ))
        // console.log(query)
        // this.setState({ queries: query })
      });
  }

  render() {
    const cart = this.props.products
    const products = cart.products
    console.log(products);

    return (
      <main>
        <h1>Category Name</h1>
        <div className={style.card_list}>
          {products && products?.map(itemData => (
            <div key={itemData.id}>
              {/* <Card image={itemData.gallery} name={`${itemData.brand} ${itemData.name}`} price="$50" /> */}
              <Card item={itemData} />
            </div>
          ))}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  // The state
  products: state.products,
})

const mapActionToProps = {
  //The action
  getAllProducts
}

export default connect(mapStateToProps, mapActionToProps)(Category)








































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
                <img src={item.gallery} alt={this.props.item.name} className={style.card_image} />
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





import React from 'react';
import Product1 from '../assets/Product Card/ProductA.png'
import style from '../styles/card.module.css'
import { BsCart2 } from 'react-icons/bs'
// import { gql } from '@apollo/client'


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      prices: "",
      image: ""
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
                gallery
                name
                id
                prices{
                  currency
                  amount
                }
                category
              }
            }
          }
        
      `
      })
    })
      .then((res) => res.json())
      .then((result) => {
        let query = result.data.category.products
        this.setState({
          item: query.name,
      
        })
        console.log(query)
      });
  }


  render() {
    return (
      <>
        <div className={style.card_container}>
          {/**Real data to be fetch from the server */}
          <div className={style.card_item}>
            <img src={Product1} alt="product1" className={style.card_image} />
            <p className={style.item}>Apollo Running Short</p>
            <p className={style.price}>$50</p>
          </div>
          <div className={style.hover_icon}>
            <BsCart2 />
          </div>

        </div>
      </>
    );
  }
}

export default Card;
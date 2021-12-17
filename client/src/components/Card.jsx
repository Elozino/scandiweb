import React from 'react';
// import Product1 from '../assets/Product Card/ProductA.png'
import style from '../styles/card.module.css'
import { BsCart2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className={style.card_container}>
          <Link to="./pages/pdp" className={style.link}>
            {/**Real data to be fetch from the server */}
            <div className={style.card_item}>
              <div>
                <img src={this.props.image} alt="product1" className={style.card_image} />
              </div>
              <p className={style.item}>{this.props.name}</p>
              <p className={style.price}>{this.props.price}</p>
            </div>
          </Link>
          <div className={style.hover_icon}>
            <BsCart2 />
          </div>
        </div>
      </>
    );
  }
}

export default Card;





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
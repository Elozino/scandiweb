import React from 'react';
import Card from '../components/Card';
import style from '../styles/catergory.module.css'



class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      queries: []
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
        query.map((itemList) => (
          this.setState(itemList)
        ))
        console.log(query)
        this.setState({ queries: query })
      });
  }

  render() {
    const { queries } = this.state
    return (
      <main>
        <h1>Category Name</h1>
        <div className={style.card_list}>
          {queries.map(itemData => (
            <div key={itemData.id}>
              <Card image={itemData.gallery} name={`${itemData.brand} ${itemData.name}`} price="$50" />
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Category;
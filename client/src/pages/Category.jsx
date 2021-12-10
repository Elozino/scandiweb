import React from 'react';
import Card from '../components/Card';
import style from '../styles/catergory.module.css'



class Category extends React.Component {
  render() {
    return (
      <main>
        <h1>Category Name</h1>
        <div className={style.card_list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    );
  }
}

export default Category;
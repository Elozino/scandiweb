import React from "react";
import { connect } from "react-redux";
import Card from "../components/Card";
import style from "../styles/catergory.module.css";
// import { getAllProducts } from "../redux/actions/ProductAction";

class Category extends React.Component {
  render() {
    const cart = this.props.products;
    const products = cart.products;
    // console.log(products);
    // console.log(cart);

    return (
      <main>
        <h1>Category Name</h1>
        <div className={style.card_list}>
          {products &&
            products?.map((itemData) => (
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
});

// const mapActionToProps = {
//   //The action
//   getAllProducts,
// };

// export default connect(mapStateToProps, mapActionToProps)(Category);
export default connect(mapStateToProps)(Category);

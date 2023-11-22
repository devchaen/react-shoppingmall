import React from "react";
import { useSelector } from "react-redux";

const MyCart = () => {
  const cartProducts = useSelector((state) => state.cartProducts.cartProducts);
  console.log(cartProducts);
  return (
    <div
      style={{ marginTop: "150px" }}
      className="ui unstackable items container"
    >
      {cartProducts.map((product) => (
        <div key={product.id} className="item">
          <input type="checkbox"></input>
          <div className="ui small image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="content">
            <p className="header">{product.title}</p>
            <div>$ {product.price}</div>
            <div className="meta">{product.description}</div>
          </div>
        </div>
      ))}
      <div className="ui item container">
        <div className="content">
          <span className="header">
            Total Price : $
            {cartProducts.reduce((prev, cur) => {
              return Number(prev) + Number(cur.price);
            }, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

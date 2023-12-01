import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/store/cart/cart.slice";
import { RootState } from "../redux/store";
import { TProduct } from "../redux/store/product/product.slice";

const ProductDetail = () => {
  const productId: number = Number(useParams().productId);
  const products: TProduct[] = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  const [product] = [...products.filter((product) => product.id === productId)];
  const { title, price, image, description, rating } = product;
  console.log(product);
  return (
    <div style={{ marginTop: "100px" }} className="ui items container">
      <div className="item">
        <div className="image large">
          <img src={image} alt={title} />
        </div>
      </div>
      <div className="item">
        <div className="content">
          <h1 className="header">{title}</h1>
          <div className="meta">{description}</div>
          <div>rating : {rating.rate}</div>
          <div>Price : ${price}</div>
        </div>
      </div>
      <div className="item">
        <button onClick={() => dispatch(addCart(product))}>Add Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;

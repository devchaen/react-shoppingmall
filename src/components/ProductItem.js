import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actions/cartActions";

const ProductItem = ({ active }) => {
  const [renderList, setRenderList] = useState([]);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    filterByCategory(products);
  }, [active, products]);

  const filterByCategory = (products) => {
    if (active === "all") {
      setRenderList([...products]);
    } else {
      let filteredList = [...products].filter(
        (product) => product.category === active
      );
      setRenderList(filteredList);
    }
  };

  return (
    <>
      {renderList.map((product) => (
        <div className="column" key={product.id}>
          <div className="ui link cards">
            <div className="ui card">
              <Link to={`/product/${product.id}`}>
                <div className="ui small image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="content">
                  <div className="header">{product.title}</div>
                  <div className="sub header">$ {product.price}</div>
                  <div className="meta">{product.category}</div>
                </div>
              </Link>
              <div
                className="ui bottom attached button"
                onClick={() => {
                  dispatch(addCart(product));
                }}
              >
                <i className="add icon"></i>
                Add Cart
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductItem;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const category = [
  "all",
  "electronics",
  "women's clothing",
  "men's clothing",
  "jewelery",
];

const ProductLists = () => {
  const [active, setActive] = useState(category[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="ui container" style={{ display: "flex" }}>
        {category.map((category) => (
          <Nav
            key={category}
            active={active === category}
            onClick={() => {
              setActive(category);
            }}
          >
            {category}
          </Nav>
        ))}
      </div>
      <div className="ui four column doubling stackable grid container">
        <ProductItem active={active} />
      </div>
    </>
  );
};

export default ProductLists;

const Nav = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  margin-bottom: 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;

  ${({ active }) =>
    active &&
    `
  border-bottom: 2px solid black;
  opacity: 1;
  `}
`;

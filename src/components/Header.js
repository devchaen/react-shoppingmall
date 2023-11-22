import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
          <h2 className="item">FakeShop</h2>
        </Link>

        <div className="right item">
          <Link to={`/cart`}>
            <button>My Cart</button>
          </Link>
          <Link to={`/login`}>
            <button>login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

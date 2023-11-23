import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/actions/userActions";

const Header = (currentUser) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutUser());
  };

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
          {localStorage.getItem("user") ? (
            <button onClick={() => logout()}>logout</button>
          ) : (
            <Link to={`/login`}>
              <button>login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

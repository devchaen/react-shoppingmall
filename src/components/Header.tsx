import { Link } from "react-router-dom";
import { IUserState, logoutUser } from "../redux/store/user/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

const Header = () => {
  const currentUser: IUserState = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <Link to={`/`}>
          <h2 className="item">FakeShop</h2>
        </Link>

        <div className="right item">
          {currentUser.user ? (
            <div>
              <p>환영합니다, {currentUser.user.email}님!</p>
              <button onClick={() => dispatch(logoutUser())}>logout</button>
            </div>
          ) : (
            <Link to={`/login`}>
              <button>login</button>
            </Link>
          )}
          <Link to={`/cart`}>
            <button>My Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

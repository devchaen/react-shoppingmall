import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => login(e)} className="ui form">
          <div className="field">
            <label>Id</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="userId"
              placeholder="Enter your id..."
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
          </div>
          <button className="ui button" type="submit">
            로그인
          </button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <label>아직 회원이 아니신가요?</label>
          <Link to={`/signup`}>
            <button className="ui button">회원가입</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

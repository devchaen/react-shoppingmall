import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <h1>Login</h1>
        <form className="ui form">
          <div className="field">
            <label>Id</label>
            <input type="text" name="userId" placeholder="Enter your id..." />
          </div>
          <div className="field">
            <label>Password</label>
            <input
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

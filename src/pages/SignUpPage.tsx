import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    dispatch(createUser(email, password));
    navigate("/");
  };

  return (
    <div
      style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}
    >
      <div>
        <form onSubmit={(e) => signUp(e)} className="ui form">
          <h1>Sign up</h1>
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
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

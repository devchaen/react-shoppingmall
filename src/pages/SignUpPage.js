import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/actions/userActions";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../api/firebase";
import { ActionTypes } from "../redux/constants/action-types";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const auth = getAuth(app);

  const signUp = async (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = {
          email: userCredential.user.email,
          id: userCredential.user.uid,
          token: userCredential.user.stsTokenManager.refreshToken,
        };
        dispatch({ type: ActionTypes.USER_SIGNUP, payload: newUser });
      })
      .catch((error) => {
        console.log(error);
      });
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

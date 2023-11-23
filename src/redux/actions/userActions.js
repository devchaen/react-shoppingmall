import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { ActionTypes } from "../constants/action-types";
import { app } from "../../api/firebase";

const auth = getAuth(app);

//회원가입 - 새로운 user 생성
export const createUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const newUser = {
      email: userCredential.user.email,
      id: userCredential.user.uid,
      token: userCredential.user.stsTokenManager.refreshToken,
    };
    dispatch({ type: ActionTypes.USER_SIGNUP, payload: newUser });
  } catch (error) {
    console.log(error);
  }
};

//로그인 - email, password로 사용자 로그인
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const loginedUser = {
      email: userCredential.user.email,
      id: userCredential.user.uid,
      token: userCredential.user.stsTokenManager.refreshToken,
    };

    dispatch({ type: ActionTypes.USER_LOGIN, payload: loginedUser });
  } catch (error) {
    console.log(error);
  }
};

//로그아웃
export const logoutUser = () => async (dispatch) => {
  signOut(auth)
    .then(() => {
      dispatch({ type: ActionTypes.USER_LOGOUT });
    })
    .catch((error) => {
      console.log(error);
    });
};

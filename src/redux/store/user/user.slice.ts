import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { app } from "../../../api/firebase";

const auth = getAuth(app);
const currentUser = localStorage.getItem("user");

export interface IUserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface IUserInfo {
  id: string;
  email: string;
  token: string;
}

const initialState: IUserState = {
  user: currentUser ? JSON.parse(currentUser) : null,
  loading: false,
  error: null,
};

// async actions
// firebase 회원가입 비동기 액션
export const createUser = createAsyncThunk(
  "user/signup",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error: any) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occured");
      }
    }
  }
);

// firebase 로그인 비동기 액션
export const loginUser = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      return userCredential.user;
    } catch (error: any) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occured");
      }
    }
  }
);

// firebase 로그아웃 비동기 액션
export const logoutUser = createAsyncThunk("user/logout", async () => {
  await signOut(auth);
  localStorage.removeItem("user");
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.fulfilled, (state, { payload }) => {
        const user: IUserInfo = {
          id: payload.uid,
          email: payload.email!,
          token: payload.refreshToken,
        };
        localStorage.setItem("user", JSON.stringify(user));

        state.loading = false;
        state.user = payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const user: IUserInfo = {
          id: payload.uid,
          email: payload.email!,
          token: payload.refreshToken,
        };
        localStorage.setItem("user", JSON.stringify(user));

        state.loading = false;
        state.user = payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login Failed";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

// export const { setUser } = userSlice.actions;
export default userSlice.reducer;

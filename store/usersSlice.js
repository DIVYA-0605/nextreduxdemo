import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const userData =
  cookies.get("Name") != null ? cookies.get("Name") : [];

const initialState = {
  users:userData,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(state);
      state.users = [...state.users, action.payload];

      cookies.set("STATE",(state), { path: "/" });
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;

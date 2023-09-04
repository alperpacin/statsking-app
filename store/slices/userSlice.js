import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice;

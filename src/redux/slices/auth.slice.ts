import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthUser } from "../../interfaces/auth.interface";

type State = {
  authUser: IAuthUser | null;
};

const initialState: State = {
  authUser: null,
};

const slice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.authUser = null;
    },

    setAuthUser: (state, action: PayloadAction<IAuthUser>) => {
      state.authUser = action.payload;
    },
  },
});

export const authActions = slice.actions;

export default slice.reducer;

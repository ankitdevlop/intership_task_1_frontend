import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    points: null,
    email:null,
    
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log("login payload:", action.payload);
    },
    register: (state, action) => {
      state.user = action.payload;
      console.log("Register payload:", action.payload);
    },
    logout: (state) => {
      state.user = null;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
   
  },
});

export const { login, logout, register,setPoints  } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectPoints = (state) => state.user.points;


export default userSlice.reducer;

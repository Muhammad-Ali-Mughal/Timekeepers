import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import authReducer from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    darkMode: darkModeReducer,
    cart: cartSlice,
  },
});

export default store;

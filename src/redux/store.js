import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/reducers/basketSlice";
import productReducer from "../redux/reducers/productSlice";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productReducer,
  },
});

export default store;

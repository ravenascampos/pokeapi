import { configureStore } from "@reduxjs/toolkit";
import carrinhoReducer from "../Slice/CarrinhoSlice/carrinhoSlice";

export default configureStore({
  reducer: {
    carrinho: carrinhoReducer,
  },
});

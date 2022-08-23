import { configureStore } from "@reduxjs/toolkit";
import { ICartState } from "./modules/cart/types";

import rootReducer from "./modules/rootReducer";

export interface IState {
  cart: ICartState;
}

const store = configureStore({
  reducer: rootReducer
});

export default store;
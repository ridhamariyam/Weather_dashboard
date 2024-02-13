import rootReducer from "./reducers.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: rootReducer, devTools: true });
export default store;
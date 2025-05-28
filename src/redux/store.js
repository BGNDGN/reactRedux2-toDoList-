import { createStore } from "redux";
import todoReducer from "./todoSlice"

const store = createStore(todoReducer)

export default store;
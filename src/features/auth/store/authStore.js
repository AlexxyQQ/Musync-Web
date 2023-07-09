import { createStore } from "redux";
import authReducer from "./reducer/authReducer";

const authStore = createStore(authReducer);

export default authStore;

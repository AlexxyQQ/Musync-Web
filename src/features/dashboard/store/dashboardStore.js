import dashboardReducer from "./reducer/dashboardReducer";
import { createStore } from "redux";

const dashboardStore = createStore(dashboardReducer);

export default dashboardStore;

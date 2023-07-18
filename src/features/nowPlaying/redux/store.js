import { createStore } from "redux";
import audioPlayerReducer from "./reducers/audioPlayerReducer";

const audioPlayerStore = createStore(audioPlayerReducer);

export default audioPlayerStore;

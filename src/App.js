import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/Login";
import SignupView from "./features/auth/views/Signup";
import DashboardView from "./features/dashboard/views/Dashboard";
import { DashboardRoute, LoginRoute, SignupRoute } from "./configs/Routes";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import dashboardReducer from "./features/dashboard/store/reducer/dashboardReducer";
import authReducer from "./features/auth/store/reducer/authReducer";
import audioPlayerReducer from "./features/nowPlaying/redux/reducers/audioPlayerReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  ap: audioPlayerReducer,
});
const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={LoginRoute} element={<LoginView />} />
          <Route path={SignupRoute} element={<SignupView />} />
          <Route path={DashboardRoute} element={<DashboardView />} />
          <Route path="/" element={<DashboardView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

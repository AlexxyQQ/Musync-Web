import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/Auth";
import SignupForm from "./features/auth/views/components/SignupForm";
import DashboardView from "./features/dashboard/views/Dashboard";
import { DashboardRoute, LoginRoute, SignupRoute } from "./configs/Routes";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import dashboardReducer from "./features/dashboard/store/reducer/dashboardReducer";
import authReducer from "./features/auth/store/reducer/authReducer";
import audioPlayerReducer from "./features/nowPlaying/redux/reducers/audioPlayerReducer";
import Profile from "./features/profile/views/Profile";
import ManageAllSongs from "./features/all_songs/views/ManageAllSongs";
import AdminPannel from "./features/admin/view/AdminPannel";
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
          <Route path={SignupRoute} element={<SignupForm />} />
          <Route path={DashboardRoute} element={<DashboardView />} />
          <Route path="/" element={<DashboardView />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/songs" element={<ManageAllSongs />} />
          <Route path="/admin" element={<AdminPannel />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

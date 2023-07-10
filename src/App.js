import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/Login";
import SignupView from "./features/auth/views/Signup";
import DashboardView from "./features/dashboard/views/Dashboard";
import { DashboardRoute, LoginRoute, SignupRoute } from "./configs/Routes";
import { Provider } from "react-redux";
import authStore from "./features/auth/store/authStore";
import dashboardStore from "./features/dashboard/store/dashboardStore";

const App = () => {
  return (
    <Provider store={authStore}>
      <Provider store={dashboardStore}>
        <BrowserRouter>
          <Routes>
            <Route path={LoginRoute} element={<LoginView />} />
            <Route path={SignupRoute} element={<SignupView />} />
            <Route path={DashboardRoute} element={<DashboardView />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Provider>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/Login";
import SignupView from "./features/auth/views/Signup";
import { LoginRoute, SignupRoute } from "./configs/Routes";
import { Provider } from "react-redux";
import authStore from "./features/auth/store/authStore";

const App = () => {
  return (
    <>
      <Provider store={authStore}>
        <BrowserRouter>
          <Routes>
            <Route path={LoginRoute} element={<LoginView />} />
            <Route path={SignupRoute} element={<SignupView />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;

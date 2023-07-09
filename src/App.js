import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./features/auth/views/Login";
import { LoginRoute } from "./configs/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={LoginRoute} element={<LoginView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

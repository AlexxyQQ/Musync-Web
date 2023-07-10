import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/action/dashboardAction";
import initialLogin from "../services/initilalLoginController";

const Dashboard = () => {
  const { loggedUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  // Function to fetch the user data and dispatch the setUser action
  const fetchUser = async () => {
    try {
      const user = await initialLogin();
      dispatch(setUser(user));
      console.log(loggedUser);
    } catch (error) {
      console.error("Error fetching user:", error);
      // You might want to set some errors in the state here using setErrors action, similar to how you set the user.
    }
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return <div>{`Hello ${loggedUser.username || "Guest"}`}</div>;
};

export default Dashboard;

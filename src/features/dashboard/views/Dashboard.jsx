import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import initialLogin from "../services/initilalLoginController";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    initialLogin(navigate, setUser);
  }, []);

  return <div>{`hello ${user.username}`}</div>;
};

export default Dashboard;

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const token =   useSelector((state) => state.user.userToken);
  // useEffect(() => {
  //   token = localStorage.getItem("token");
  // }, []);

  return !!token ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
};

export default AuthGuard;

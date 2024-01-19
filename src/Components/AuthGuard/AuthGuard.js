import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  return !!localStorage.getItem("token") ? (
    children
  ) : (
    <Navigate to={"/login"} />
  );
};

export default AuthGuard;

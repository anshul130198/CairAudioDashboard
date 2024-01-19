import { Navigate } from "react-router-dom";

const Redirect = () => {
  return !!localStorage.getItem("token") ? (
    <Navigate to={"/dashboard"} />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Redirect;

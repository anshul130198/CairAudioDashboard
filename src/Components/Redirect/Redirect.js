import { Navigate } from "react-router-dom";

const Redirect = () => {
  return !!localStorage.getItem("token") ? (
    <Navigate to={"/project/start-project"} />
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Redirect;

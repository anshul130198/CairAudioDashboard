import { useState } from "react";
import styles from "./Login.module.scss";
import { Token, UserData } from "../../../Constants/userData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../utils/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    UserData.forEach((user) => {
      if (user.email === username && user.password === password) {
        localStorage.setItem("token", Token);
        localStorage.setItem("user", username);
        dispatch(loggedIn({email: username, token: Token}))
        setUsername("");
        setPassword("");
        navigate('/project/start-project')
      }
    });
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label>Email:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

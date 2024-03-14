import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { Token, UserData } from "../../../Constants/userData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../utils/userSlice";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    UserData.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("token", Token);
        localStorage.setItem("user", data.email);
        dispatch(loggedIn({ email: data.email, token: Token }));
        navigate("/project/start-project", { state: { previousPathname: "/login" } });
      }
    });
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label>Email:</label>
          <input
            type="text"
            {...register("email")}
            autoComplete="off"
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <label>Password:</label>
          <input
            type="password"
            {...register("password")}
            autoComplete="off"
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

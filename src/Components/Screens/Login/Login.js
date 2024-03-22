import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import { Token, UserData } from "../../../Constants/userData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedIn } from "../../../store/userSlice";
import InputField from "../../InputField/InputField";

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
    <div className="login-box">
      <div className="brand-link">
        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
        <span className="brand-text font-weight-bold clr-w">Audio Dashboard</span>
      </div>
      {/* /.login-logo */}
      <div className="card loginshadow">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="input-group mb-3">
                     <InputField
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        register={register}
                        error={errors.email}
                      />
              {/* <input type="email" {...register("email")} className="form-control" placeholder="Email" /> */}
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            <div className="input-group mb-3">
              {/* <input type="password" {...register("password")} className="form-control" placeholder="Password" /> */}
                     <InputField
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        register={register}
                        error={errors.password}
                      />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          {/* /.social-auth-links */}
          <p className="mb-1">
            <a className="fgtpass" onClick={() => navigate('/forgot-password')}>I forgot my password</a>
          </p>
        </div>
        {/* /.login-card-body */}
      </div>
    </div>
  );
};

export default Login;

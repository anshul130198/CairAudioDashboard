import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'

const ForgotPassword = () => {
    const navigate = useNavigate();
    return (
        <div className="login-box">
            <div className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-bold clr-w">Audio Dashboard</span>
            </div>
            {/* /.login-logo */}
            <div className="card loginshadow">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                    <form action="recover-password.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </form>
                    <p className="mt-3 mb-1">
                        <a onClick={()=> navigate('/login')}>Login</a>
                    </p>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>

    )
}

export default ForgotPassword
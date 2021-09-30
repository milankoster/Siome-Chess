import React, {Component} from 'react';
import './Login.sass'
import {Button} from "react-bootstrap";
// import Logo from "../Register/Logo/Logo";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";


class Login extends Component {
    render() {
        return (
            <section className="login-wrapper">
                <section className="login-menu">
                    <Link to="/">
                        <img src={logo} className="logo-image" alt="Logo"/>
                    </Link>
                    <section className="login-form-wrapper">
                        <div className="login-form">
                            <div className="login-input-wrapper">
                                <form>
                                    <input type="text" placeholder="Username or Email"/>
                                    <input type="text" placeholder="Password"/>
                                    <div className="login-form-remember">
                                        <input type="checkbox" className="login-form-checkbox"/> Remember
                                    </div>
                                </form>
                                <Button variant="green" className="login-button">
                                    <div className="login-button-text">
                                        Log In
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="login-signup">
                            <Link to="/register" className="login-signup-link">
                                Sign up now!
                            </Link>
                        </div>
                    </section>
                </section>
            </section>

        );
    }
}

export default Login;

import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Register.sass'
import logo from "../../assets/logo.png";


class Login extends Component {
    render() {
        return (
            <section className="register-wrapper">
                <section className="register-menu">
                    <Link to="/">
                        <img src={logo} className="logo-image" alt="Logo"/>
                    </Link>
                    <section className="register-form-wrapper">
                        <div className="register-form">
                            <div className="register-input-wrapper">
                                <form>
                                    <input type="text" placeholder="Username"/>
                                    <input type="text" placeholder="Email"/>
                                    <input type="text" placeholder="Password"/>
                                </form>
                                <Button variant="green" className="register-button">
                                    <div className="register-button-text">
                                        Sign Up
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="login-signup">
                            <Link to="/login" className="login-signup-link">
                                Already have an account?
                            </Link>
                        </div>
                    </section>
                </section>
            </section>

        );
    }
}

export default Login;

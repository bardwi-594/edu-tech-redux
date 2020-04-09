import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions";


class Login extends Component {
    onSubmit = formProps => {
        this.props.login(formProps, () => {
            this.props.history.push('/dashboard');
        });
    }

    render() {
        const { handleSubmit } = this.props
        return (

            <div className="wrapper login_wrapper">
                <div className="login_banner">
                    <div className="login_banner_bg"></div>
                </div>
                <div className="login_form_container">
                    <div>
                        <div className="text_container">
                            <h3 className="tangerine">
                                <span className="tangerine_F">F</span>uto
                  </h3>
                            <h1 className="heading">
                                Education Is <span className="tangerine">Fun</span>
                                <span className="bold">!</span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit.
                  </p>
                        </div>
                        <form className="login_form" onSubmit={handleSubmit(this.onSubmit)}>
                            <fieldset className="input_container">
                                <Field
                                    name="user_email"
                                    type="email"
                                    component="input"
                                    className="input help_text_input"
                                    placeholder="User email(admin)"
                                    autoComplete="none"
                                    required
                                />
                            </fieldset>
                            <fieldset className="input_container">
                                <Field
                                    name="password"
                                    type="password"
                                    component="input"
                                    autoComplete="none"
                                    className="input help_text_input"
                                    placeholder="Password (admin)"
                                    required
                                />
                            </fieldset>


                            <div className="btn-reg">
                                <p className="forgot_pass_link">
                                    <Link to='/forgot'>Forgot Password?</Link>
                                </p>
                                {this.props.errorMessage && (
                                    <div className="error">{this.props.errorMessage}</div>
                                )}
                                <button className="btn">Login</button>

                                <p className="forgot_pass_link">
                                    <Link to='/signup'>Register</Link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'login' })
)(Login);
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actions from "../../actions";


class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/dashboard');
    });
  }

  render() {
    const { handleSubmit } = this.props
    return (

      <div className="wrapper signup_wrapper">
        <div className="signup_banner">
          <div className="signup_banner_bg"></div>
        </div>
        <div className="signup_form_container">
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
            <form className="signup_form" onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset className="input_container">
                <Field
                  name="username"
                  type="text"
                  component="input"
                  className="input help_text_input"
                  placeholder="Username"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="user_email"
                  type="email"
                  component="input"
                  className="input help_text_input"
                  placeholder="User email"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="password"
                  type="password"
                  component="input"
                  className="input help_text_input"
                  placeholder="Password"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="user_type"
                  type="user_type"
                  component="input"
                  className="input help_text_input"
                  placeholder="User type"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="user_number"
                  type="number"
                  component="input"
                  className="input help_text_input"
                  placeholder="Usernumber"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="school_id"
                  type="text"
                  component="input"
                  className="input help_text_input"
                  placeholder="School id"
                  autoComplete="none"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="school_name"
                  type="text"
                  component="input"
                  autoComplete="none"
                  className="input help_text_input"
                  placeholder="School Name"
                />
              </fieldset>
              <fieldset className="input_container">
                <Field
                  name="school_location"
                  type="text"
                  component="input"
                  className="input help_text_input"
                  placeholder="School location"
                  autoComplete="none"
                />
              </fieldset>
              <div>
                {this.props.errorMessage}
              </div>

              <p className="forgot_pass_link">
                <Link to='/forgot'>Forgot Password?</Link>
              </p>
              <button className="btn">Register</button>

              <p className="forgot_pass_link">
                <Link to='/login'>Login</Link>
              </p>



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
  reduxForm({ form: 'signup' })
)(Signup);
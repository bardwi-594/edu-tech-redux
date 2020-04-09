import React from "react";

const LoginForm = props => {
  return (
    <form onSubmit={props.onSubmitHandler} className="login_form" action="/">
      <div className="input_container">
        <input
          onChange={props.onChangeHandler}
          name="username"
          type="text"
          className="input help_text_input"
          placeholder="Username (admin)"
        />
      </div>
      <div className="input_container">
        <input
          onChange={props.onChangeHandler}
          name="password"
          type="password"
          className="input help_text_input"
          placeholder="Password (admin)"
        />
      </div>
      <a className="forgot_pass_link" href="#">
        Forgot Password ?
      </a>

      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

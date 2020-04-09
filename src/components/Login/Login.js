import React, { Component } from "react";
import LoginForm from "./LoginForm";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.username == "admin" && this.state.password == "admin") {
      this.props.history.push("/dashboard");
    }
  };

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
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

            <LoginForm
              onChangeHandler={this.onChangeHandler}
              onSubmitHandler={this.onSubmitHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";

class SignIn extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleSubmit = () => {
    console.log("Submit Pressed");
  };

  render() {
    return (
      <React.Fragment>
        <head>
          <title>Login V6</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            type="image/png"
            href="utils/signin/images/icons/favicon.ico"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/bootstrap/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/fonts/iconic/css/material-design-iconic-font.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/animate/animate.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/css-hamburgers/hamburgers.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/animsition/css/animsition.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/select2/select2.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/vendor/daterangepicker/daterangepicker.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/css/util.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="utils/signin/css/main.css"
          />
        </head>
        <body>
          <div class="limiter">
            <div class="container-login100">
              <div class="wrap-login100 p-t-85 p-b-20">
                <form class="login100-form validate-form">
                  <span class="login100-form-title p-b-70">Welcome</span>
                  <span class="login100-form-avatar">
                    <img src="images/avatar-01.jpg" alt="AVATAR" />>
                  </span>

                  <div
                    class="wrap-input100 validate-input m-t-85 m-b-35"
                    data-validate="Enter username"
                  >
                    <input class="input100" type="text" name="username" />
                    <span class="focus-input100" data-placeholder="Username" />
                  </div>

                  <div
                    class="wrap-input100 validate-input m-b-50"
                    data-validate="Enter password"
                  >
                    <input class="input100" type="password" name="pass" />
                    <span class="focus-input100" data-placeholder="Password" />
                  </div>

                  <div class="container-login100-form-btn">
                    <button class="login100-form-btn">Login</button>
                  </div>

                  <ul class="login-more p-t-190">
                    <li class="m-b-8">
                      <span class="txt1">Forgot</span>

                      <a href="#" class="txt2">
                        Username / Password?
                      </a>
                    </li>

                    <li>
                      <span class="txt1">Don't have an account?</span>

                      <a href="#" class="txt2">
                        Sign up
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>

          <div id="dropDownSelect1" />
          <script src="utils/signin/vendor/jquery/jquery-3.2.1.min.js" />
          <script src="utils/signin/vendor/animsition/js/animsition.min.js" />
          <script src="utils/signin/vendor/bootstrap/js/popper.js" />
          <script src="utils/signin/vendor/bootstrap/js/bootstrap.min.js" />
          <script src="utils/signin/vendor/select2/select2.min.js" />
          <script src="utils/signin/vendor/daterangepicker/moment.min.js" />
          <script src="utils/signin/vendor/daterangepicker/daterangepicker.js" />
          <script src="utils/signin/vendor/countdowntime/countdowntime.js" />
          <script src="utils/signinjs/main.js" />
        </body>
      </React.Fragment>
    );
  }
}

export default SignIn;

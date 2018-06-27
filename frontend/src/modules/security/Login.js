import React, { Component } from 'react';
import { connect } from 'react-redux';  
import { Field, reduxForm } from 'redux-form';
import { login } from "../../actions/loginActions";

const form = reduxForm({  
  form: 'login'
});

class Login extends Component {

  loginSubmit = (values) => {
    this.props.login(values);
  }

  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props; 
    
    return (
      <body class="hold-transition login-page">
      <div class="login-box">
      <div class="login-logo">
        <a href=""><b>e</b>Tracker</a>
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form onSubmit={handleSubmit(this.loginSubmit.bind(this))}>
        {this.errorMessage()}
          <div class="form-group has-feedback">
            <Field name="username" className="form-control" component="input" type="text" placeholder="Username"/>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <Field name="password" className="form-control" component="input" type="password" placeholder="Password"/>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label>
                  <input type="checkbox"/> Remember Me
                </label>
              </div>
            </div>
            
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
           
          </div>
        </form>

        <div class="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
      <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
    </div>

    <a href="#">I forgot my password</a><br/>
    <a href="register.html" class="text-center">Register a new membership</a>
    
      </div>
    </div>
    </body>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error };
}

export default connect(mapStateToProps, { login })(form(Login)); 
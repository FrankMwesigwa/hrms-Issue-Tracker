import React, { Component } from 'react';
import { connect } from "react-redux"
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from "../actions/loginActions";

import Header from './common/Header';
import SideBar from './common/SideBar';
import Dashboard from './common/Dashboard';
import AddUser from './users/AddUser';

import Login from './security/Login';

class App extends Component {
  
  componentWillMount() {    
    this.props.dispatch(isAuthenticated())       
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.authenticated && nextProps.userData === null) {
      this.props.dispatch(isAuthenticated())        
    }      
  }
  render() {
    const { authenticated, loginFailed, userData, loading } = this.props; 
    

    let html;
    if (authenticated) {
      html = (      
        <div class="container-scroller">
          <Header />
      <div class="container-fluid page-body-wrapper">
          <SideBar />
          <div class="main-panel">
          <div class="content-wrapper">
            <Switch>
              <Route path="/home" exact component={Dashboard}/>
              <Route path="/user" name="Users" component={AddUser}/>
              <Redirect from="/" to="/home"/>
            </Switch>
          </div>

            <footer class="footer">
          <div class="container-fluid clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018 <a href="http://mapproject.se/" target="_blank">Map Project</a>. All rights reserved.</span>
          </div>
        </footer>

      </div>     
      </div>
      </div>
      )
    } else {

    if (loginFailed) {
        html = (
          <div>
            
                <strong>Something went wrong.</strong>
           
           <Login /> 
           </div>
        )
     } else {
      html = (
        <Login />
      )
     }
      
    }
    
    return (
      <div>{ html }</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.login.authenticated,
    loginFailed: state.login.failed,
    userData: state.login.userData
  }
}

export default connect ( mapStateToProps )(App);

import React, { Component } from 'react';
import { connect } from "react-redux"
import { Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "../actions/loginActions";

import Header from './common/Header';
import SideBar from './common/SideBar';
import Dashboard from './common/Dashboard';

import AddUser from './users/AddUser';
import UsersList from './users/UsersList';

import AddBatch from './batch/AddBatch';
import BatchList from './batch/BatchList';

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
        <body class="hold-transition skin-blue sidebar-mini">
        <div class="wrapper">
          <Header />
          <SideBar />
          
          <div class="content-wrapper">
            <Switch>
              <Route path="/home" exact component={Dashboard}/>
              <Route path="/user" name="Users" component={AddUser}/>
              <Route path="/users" name="Users" component={UsersList}/>
              <Route path="/batch" name="batch" component={AddBatch}/>
              <Route path="/batches" name="batches" component={BatchList}/>
              <Redirect from="/" to="/home"/>
            </Switch>
          </div>
    
          <footer class="main-footer">
            <div class="pull-right hidden-xs">
              <b>Version</b> 1.1.0
            </div>
              <strong>Copyright &copy; 2018 <a href="">Housing Finance Bank</a>.</strong> All rights reserved.
          </footer> 
 
        </div>
      </body>
      )
    } 

     else {
      html = (
        <Login />
      )
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

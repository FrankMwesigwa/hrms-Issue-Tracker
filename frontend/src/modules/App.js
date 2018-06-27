import React, { Component } from 'react';
import { connect } from "react-redux"
import { Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from "../actions/loginActions";

import Header from './common/Header';
import SideBar from './common/SideBar';
import Dashboard from './common/Dashboard';
import AddUser from './users/AddUser';

import BatchList from './batch/BatchList';

import Login from './security/Login';

class App extends Component {
  
  componentWillMount() {    
    this.props.isAuthenticated()      
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.authenticated) {
      this.props.isAuthenticated()       
    }      
  }

  render() {
    const { authenticated, account } = this.props;   

    let html;
    if (authenticated) {
      html = (    
          
        <div class="wrapper">
          <Header />
          <aside class="main-sidebar">
            <SideBar />
          </aside>
          <div class="content-wrapper">
            <Switch>
              <Route path="/home" exact component={Dashboard}/>
              <Route path="/user" name="adduser" component={AddUser}/>
              <Route path="/batchlist" name="batchlist" component={BatchList}/>
              <Redirect from="/" to="/home"/>
            </Switch>
          </div>
          

   <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 1.1.0
    </div>
    <strong>Copyright &copy; 2018 <a href="">Housing Finance Bank</a>.</strong> All rights
    reserved.
  </footer> 
     
      </div>
      )
    } else {
      html = (
        <Login />
      )

    }
    
    return (
      <body class="hold-transition skin-blue sidebar-mini">
          { html }
      </body>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    account: state.auth.account,
  }
}

export default connect ( mapStateToProps , { isAuthenticated } )(App);

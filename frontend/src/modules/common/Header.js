import React, {Component} from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import { doLogout } from "../../actions/loginActions";

class Header extends Component {

  doLogout() { 
  	this.props.doLogout();
  }

  render() {

    const { userData, loading } = this.props;
    
    if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>
  }
   
    return (
      <header class="main-header">

        <a href="#" href="{/home}" class="logo">
          <span class="logo-mini"><b>JC</b></span>
          <span class="logo-lg"><b>e-Tracker</b></span>
        </a>

      <nav class="navbar navbar-static-top" role="navigation">
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <span>{userData.branchName}</span>
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          
          
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/assets/dist/img/user.png" class="user-image" alt="User Image"/>
              <span class="hidden-xs">{userData.username}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="user-header">
                <img src="/assets/dist/img/user.png" class="img-circle" alt="User Image"/>
                <p>
                  <span>{userData.username}</span>
                </p>
              </li>

              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" href="{/myAccount}" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <button className="btn btn-default btn-flat" onClick={this.doLogout.bind(this)}>Log out</button>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <a href="" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
    </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    loading: state.login.loading
  }
}

export default connect ( mapStateToProps , { doLogout } )(Header);
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

  
    <a href="index2.html" class="logo">
     
      <span class="logo-mini"><b>A</b>LT</span>
      
      <span class="logo-lg"><b>e</b>Tracker</span>
    </a>

  
    <nav class="navbar navbar-static-top" role="navigation">
     
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          
          <li class="dropdown messages-menu">
            
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                
                <ul class="menu">
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        
                        <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"/>
                      </div>
                      
                      <h4>
                        Support Team
                        <small><i class="fa fa-clock-o"></i> 5 mins</small>
                      </h4>
                      
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  
                </ul>
                
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          
          <li class="dropdown user user-menu">
            
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image"/>
              <span class="hidden-xs">{userData.username}</span>
            </a>
            <ul class="dropdown-menu">
              
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <button className="btn btn-default btn-flat" onClick={this.doLogout.bind(this)} >Logout</button>
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
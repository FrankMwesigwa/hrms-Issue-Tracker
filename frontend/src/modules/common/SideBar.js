import React, {Component} from 'react';
import { connect } from "react-redux"
import { Link } from 'react-router-dom';

class SideBar extends Component {

  render() {
    const { userData, loading } = this.props;
    
    if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>
  }
  
    return (

      <aside class="main-sidebar">
        <section class="sidebar">

          <div class="user-panel">
            <div class="pull-left image">
              <img src="/assets/dist/img/user.png" class="img-circle" alt="User Image"/>
            </div>
            <div class="pull-left info">
              <p><span>{userData.username}</span></p>
              <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>

          <ul class="sidebar-menu" data-widget="tree">
        <li class="header">Main Navigation</li>
        
        <li class="active"><a href="#"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>
        <li class="treeview">
          <a href="#"><i class="fa fa-pie-chart"></i> <span>Batch</span></a>
          <ul class="treeview-menu">
            <li><Link to="/batches"><i className="fa fa-circle-o"></i>Batch Management</Link></li>
            <li><Link to="/batch/test"><i className="fa fa-circle-o"></i>Batch React</Link></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-table"></i> <span>Accounts</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i>Manage Accounts</a></li>
            <li><a href="#"><i class="fa fa-circle-o"></i>Accounts Reports</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-calendar"></i> <span>Tracker</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#"><i class="fa fa-circle-o"></i>Manage Tracker</a></li>
            <li><a href="#"><i class="fa fa-circle-o"></i>Tracker Reports</a></li>
          </ul>
        </li>

        <li class="treeview">
          <a href="#"><i class="fa fa-gears"></i> <span>System Masters</span>
            <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul class="treeview-menu">
            <li><Link to="/users"><i class="fa fa-circle-o"></i>User Management</Link></li>
            <li><Link to="/roles"><i class="fa fa-circle-o"></i>Role Management</Link></li>
          </ul>
        </li>

      </ul>

        </section>
      </aside>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    loading: state.login.loading
  }
}

export default connect ( mapStateToProps )(SideBar);
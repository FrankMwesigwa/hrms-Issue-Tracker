import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { getUsers } from '../../actions/userActions';

class UsersList extends Component {

	constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getUsers());
}

  render() {
		const { users, loading, errorMessage } = this.props;

if (errorMessage) {
      return <div className="error-message">
          <p>Error! {errorMessage}</p>
      </div>;
  }

  if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>;
  }

    return (
      <div>

    <section class="content-header">
      <h1>Users Management</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> security</a></li>
        <li class="active">users:</li>
      </ol>
    </section>

  <section class="content container-fluid">
  <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header">
						<h3 class="box-title">User Master</h3>
						<div class="box-tools">
							<div class="input-group" style={{width:'150px'}}>
                            <Link to="/user" class="btn btn-sm btn-default">
                                <i class="fa fa-plus-circle"></i> Add New User
                            </Link>
							</div>
						</div>
					</div>
					<div class="box-body table-responsive no-padding">
						<table class="table table-hover">
						<thead>
							<tr>
								<th>Id</th>
                                <th>User Name</th>
								<th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
							</tr>
							</thead>
							<tbody> 
                      {
                        users.map(user => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.username}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td><Link class="btn btn-sm btn-default" to={`/users/${user.id}`}><i class="fa fa-edit"></i>View Details</Link>
                          </td>
                        </tr>
                        ))
                      }                      
              </tbody> 

						</table>
					</div>

				</div>
			</div>
		</div>

  </section>
</div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading,
  errorMessage: state.users.error,
});

export default connect(mapStateToProps)(UsersList);
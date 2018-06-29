import React, {Component} from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import { addUser, getRoles, getBranches } from '../../actions/userActions';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
        roles: []
    };
  }

  submit = (values) => {
    this.props.dispatch(addUser(values, this.props.history));
}

componentDidMount() {
  this.props.dispatch(getBranches());
  this.props.dispatch(getRoles());
}

errorMessage() {
    if (this.props.errorMessage) {
        return (
            <div className="error-message">
                <p>{this.props.errorMessage}</p>
            </div>
        );
    }
}

  render() {
    const {handleSubmit, pristine, reset, submitting ,loading, roles, branches } = this.props;

  if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>;
    }
    
    return (
      <div>

    <section class="content-header">
      <h1>User Management</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> batch</a></li>
        <li class="active">new batch</li>
      </ol>
    </section>

  <section class="content container-fluid">
  <div class="box box-warning">
                <div class="box-header with-border">
                  <h3 class="box-title">Create New User</h3>
                </div>
                <div class="box-body">
                <form onSubmit={handleSubmit(this.submit.bind(this))}>

                    <div class="form-group">
                      <label>User Name</label>
                      <Field name="username" component="input" type="text" placeholder="Enter User Name" class="form-control"/>
                      
                    </div>
                    
                    <div class="form-group">
                      <label>Password</label>
                      <Field name="password" component="input" type="password" placeholder="Enter Password" class="form-control"/>
                    </div>

                    <div class="form-group">
                      <label>First Name</label>
                      <Field name="firstName" component="input" type="text" placeholder="Enter First Name" class="form-control"/>
                      
                    </div>
                    
                    <div class="form-group">
                      <label>Last Name</label>
                      <Field name="lastName" component="input" type="textarea" placeholder="Enter Last Name" class="form-control"/>
                    </div>

                    <div class="form-group">
                      <label>Email</label>
                      <Field name="email" component="input" type="textarea" placeholder="Enter Email" class="form-control"/>
                    </div>

                    <div class="form-group"><label>Branch</label>
                      <div>
                        <Field name="branchId" component="select" class="form-control" >
                          {branches.map(branch => <option value={branch.id} key={branch.id}>{branch.name}</option>)}
                        </Field>
					            </div>	
    			          </div>

                    <div class="form-group"><label>User Roles</label>
                      <div>
                          <select multiple className="form-control" name="roles">
                              {roles.map(role => <option value={role.id} key={role.id}>{role.roleName}</option>)}
                          </select>
					            </div>	
    			          </div>
                    
					          <div class="box-footer">
                      <button type="submit" disabled={submitting} class="btn btn-primary">Add User</button>
                      <button type="button" disabled={pristine || submitting} onClick={reset} class="btn btn-primary">Clear User</button>
	                  </div>
                  </form>
                </div>
            </div>

  </section>
</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.users.loading,
    branches: state.users.branches,
    roles: state.users.roles,
    errorMessage: state.users.error,
    addUser: state.users.addUser
    };
}

const formAddUser = reduxForm({form: 'addUser'})(AddUser);
export default connect(mapStateToProps)(formAddUser);
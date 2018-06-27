import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class AddUser extends Component {


  render() {
    return (
        <div>

        <div class="row purchace-popup">
            <div class="col-8">
              <span class="d-flex alifn-items-center">
                <h6>User Management</h6>
              </span>
            </div>
        </div>

      <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <form class="form-sample">
              <h5 class="card-description">Personal info</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">First Name</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Last Name</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Gender</label>
                    <div class="col-sm-9">
                      <select class="form-control" >
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Date of Birth</label>
                    <div class="col-sm-9">
                      <input class="form-control" placeholder="dd/mm/yyyy" />
                    </div>
                  </div>
                </div>
              </div>

              <h5 class="card-description">Address info</h5>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Address 1</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">State</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Address 2</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Postcode</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">City</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group row">
                    <label class="col-sm-3 col-form-label">Country</label>
                    <div class="col-sm-9">
                      <select class="form-control" >
                        <option>Sweden</option>
                        <option>Italy</option>
                        <option>Russia</option>
                        <option>Britain</option>
                        <option>Uganda</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-success mr-2" >Submit</button>
              <button class="btn btn-light"><Link to={'/'}>Cancel</Link></button>
            </form>
          </div>
        </div>
      </div>

  </div>
  </div>
  
    )
  }
}



export default AddUser;
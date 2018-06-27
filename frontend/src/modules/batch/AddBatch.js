import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import map from 'lodash/map';

class AddBatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
        branch: '',
        status: '',
        category: ''
    };

    this.onChange = this.onChange.bind(this);
    this.FormSubmit = this.FormSubmit.bind(this);
    
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  FormSubmit = (e) => {
    e.preventDefault();
    const { branch, status, category } = this.state;
    axios.post('http://localhost:8005/batch/add', { branch, status, category } );
  }

    render() {
        return (

    <div>

        <div class="modal fade" id="modal-default">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Add New Trackling Batch</h4>
              </div>
              <div class="modal-body">
              <div class="box box-warning">
                
                <div class="box-body">
                <form role="form">
                <div class="form-group">
                  <label>Branch</label>
                  <input type="text" class="form-control" name="branch" value ={this.state.branch} onChange={this.onChange} placeholder="Enter Branch"/>
                </div>

                <div class="form-group">
                  <label>Category</label>
                  <input type="text" class="form-control" name="category" value ={this.state.category} onChange={this.onChange} placeholder="Enter Category"/>
                </div>

                <div class="form-group">
                  <label>Status</label>
                  <input type="text" class="form-control" name="status" value ={this.state.status} onChange={this.onChange} placeholder="Enter Status"/>
                </div>

                <div class="form-group">
                  <label>Select</label>
                  <select class="form-control">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Select Multiple</label>
                  <select multiple class="form-control">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option>
                  </select>
                </div>

                </form>
                </div>
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={this.FormSubmit}>Save Batch</button>
              </div>
            </div>
            
          </div>
          
        </div>
    
    </div>
        );
    }
}

export default AddBatch;
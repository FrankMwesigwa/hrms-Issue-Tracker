import React, {Component} from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux'
import { addBatch, getStatus, getBatch, getTrans } from '../../actions/batchActions';

class EditBatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
        status: [],
        trans: [],
        batch:{}
    };
  }

componentDidMount() {
  //this.props.dispatch(getBatch(this.props.match.params.id));
  this.props.dispatch(getBatch(this.props.batchId));
  this.props.dispatch(getStatus());
  this.props.dispatch(getTrans());
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
    const { pristine, reset, submitting ,loading, status, trans, batch } = this.props;
    

  if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>;
    }
    
    return (
      <div>

    <section class="content-header">
      <h1>User Batch Details</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> batch</a></li>
        <li class="active">batch details</li>
      </ol>
    </section>

  <section class="content container-fluid">
  <div class="box box-warning">
                <div class="box-header with-border">
                  <h3 class="box-title">Update Batch Status</h3>
                </div>
                <div class="box-body">
                

                    <div class="form-group">
                      <label>Batch Name</label>
                      <h3>{batch.name}</h3>
                      
                    </div>
                    
                    <div class="form-group">
                      <label>Comments</label>
                      <h3>{batch.comments}</h3>
                    </div>

          <div class="form-group"><label>Status</label>
              <div>
                  <Field name="statusId" component="select" class="form-control">
                      {status.map(s => <option value={s.id} key={s.id}>{s.name}</option>)}
                  </Field>
					    </div>	
    			</div>

					  <div class="box-footer">
                  <button type="submit" disabled={submitting} class="btn btn-primary">Update Batch Status</button>
                  <button type="button" disabled={pristine || submitting} onClick={reset} class="btn btn-primary">Clear Batch</button>
	          </div>
                  
                </div>
            </div>

  </section>

  <section class="content container-fluid">
  <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header">
						<h3 class="box-title">Batch Status Details</h3>
						<div class="box-tools">
							<div class="input-group" style={{width:'150px'}}>
							</div>
						</div>
					</div>
					<div class="box-body table-responsive no-padding">
						<table class="table table-hover">
						<thead>
							<tr>
							<th>Batch Id</th>
							<th>Status Comments</th>
                            <th>Updated On</th>
                            <th>Batch Status</th>
                            <th>Updated By</th>
							</tr>
							</thead>
							<tbody> 
                      {
                        trans.map(tran => (
                        <tr key={tran.id}>
                          <td>{tran.id}</td>
                          <td>{tran.comments}</td>
                          <td>{tran.updatedOn}</td>
                          <td>{tran.statusName}</td>
                          <td>{tran.createdBy}</td>
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

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.batch.loading,
    batch: state.batch.batch,
    status: state.batch.status,
    trans: state.batch.trans,
    errorMessage: state.batch.error,
    addBatch: state.batch.addBatch,
    batchId: ownProps.id
    };
}

const formEdit = reduxForm({form: 'editBatch'})(EditBatch);
export default connect(mapStateToProps)(formEdit);
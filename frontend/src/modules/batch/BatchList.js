import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { getBatches } from '../../actions/batchActions';

class BatchList extends Component {

	constructor(props) {
    super(props);
    this.state = {
      batches: []
    };
  }

  componentDidMount() {
    this.props.dispatch(getBatches());
}

  render() {
		const { batches, loading, errorMessage } = this.props;

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
      <h1>Batch Management</h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> security</a></li>
        <li class="active">Batches:</li>
      </ol>
    </section>

  <section class="content container-fluid">
  <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header">
						<h3 class="box-title">User Batch List</h3>
						<div class="box-tools">
							<div class="input-group" style={{width:'150px'}}>
                            <Link to="/batch" class="btn btn-sm btn-default">
                                <i class="fa fa-plus-circle"></i> New Batch
                            </Link>
							</div>
						</div>
					</div>
					<div class="box-body table-responsive no-padding">
						<table class="table table-hover">
						<thead>
							<tr>
								<th>Id</th>
                <th>Name</th>
								<th>Comments</th>
                <th>Created On</th>
                <th>Status</th>
                <th>Created By</th>
							</tr>
							</thead>
							<tbody> 
                      {
                        batches.map(batch => (
                        <tr key={batch.id}>
                          <td>{batch.id}</td>
                          <td>{batch.name}</td>
                          <td>{batch.comments}</td>
                          <td>{batch.createdOn}</td>
                          <td>{batch.statusName}</td>
                          <td>{batch.createdBy}</td>
                          <td><Link class="btn btn-sm btn-default" to={`/show/${batch.id}`}><i class="fa fa-edit"></i>View Details</Link>
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
  batches: state.batch.batches,
  loading: state.batch.loading,
  errorMessage: state.batch.error
});

export default connect(mapStateToProps)(BatchList);
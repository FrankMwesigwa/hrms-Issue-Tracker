import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const URL = 'http://localhost:8005/api';

class BatchTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
        batches: []
    };
  }

componentDidMount =() => {
    axios.get(`${URL}/batch`, {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
    })
        .then(response => {
            this.setState({batches: response.data});
            console.log(response);
        })
        .catch(error => {
            this.setState({error:true})
        });
}

  render() {

  /*if (loading) {
      return <div className="info-message">
          <p>Loading...</p>
      </div>;
    }*/
    
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
                            {this.state.batches.map(batch =>
                  <tr> 
                        <td>{batch.id}</td>
                          <td>{batch.name}</td>
                          <td>{batch.comments}</td>
                          <td>{batch.createdOn}</td>
                          <td>{batch.statusName}</td>
                          <td>{batch.createdBy}</td>
                          <td><Link to={`/batch/${batch.id}`}>{batch.id}</Link></td>
                  </tr>
                )}                      
              </tbody> 
.
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


export default BatchTest;
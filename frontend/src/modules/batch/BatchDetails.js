import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BatchDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        batch: {accounts:[]}
    };
  } 

  componentDidMount = () => {
    axios.get('http://localhost:8005/api/batch/'+this.props.match.params.id, {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem( "token") }
    })
        .then(response => {
            this.setState({batch: response.data});
            console.log(response);
        })
        .catch(error => {
            this.setState({error:true})
        });
}

  delete(id){
    console.log(id);
    axios.delete('http://localhost:8005/api/batch/'+id)
      .then((result) => {
        this.props.history.push("/batches")
      });
  }

  render() {
    const accountChoices = [];

    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.batch.name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Batch List</Link></h4>
            <dl>
              <dt>ISBN:</dt>
              <dd>{this.state.batch.id}</dd>
              <dt>Author:</dt>
              <dd>{this.state.batch.name}</dd>
              <dt>Description:</dt>
              <dd>{this.state.batch.comments}</dd>
              <dt>Publish Date:</dt>
              <dd>{this.state.batch.createdOn}</dd>
              <dt>Publisher:</dt>
              <dd>{this.state.batch.statusName}</dd>
            </dl>
            <Link to={`/edit/${this.state.batch.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.batch.id)} class="btn btn-danger">Delete</button>
          </div>

          <section class="content container-fluid">
  <div class="row">
			<div class="col-md-12">
				<div class="box">
					<div class="box-header">
						<h3 class="box-title">Batch Account Details</h3>
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
							  <th>Account Name</th>
                <th>Account Number</th>
                <th>Client Code</th>
                <th>Account Type</th>
							</tr>
							</thead>
              <tbody> 
                {this.state.batch.accounts.map(account =>
                  <tr> 
                    <td>{account.batchId}</td>
                    <td>{account.accountName}</td>
                    <td>{account.accountNo}</td>
                    <td>{account.clientCode}</td>
                    <td>{account.accountType}</td>
                  </tr>
                )}                      
              </tbody> 
              
						</table>
					</div>

				</div>
			</div>
		</div>

  </section>


        </div>
      </div>
    );
  }
}

export default BatchDetails;

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BatchDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
        batch: {}
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
        </div>
      </div>
    );
  }
}

export default BatchDetails;

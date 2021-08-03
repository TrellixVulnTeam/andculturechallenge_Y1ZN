import React, {Component} from 'react';
import axios from 'axios';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      first: '', 
      last: '', 
      email: '', 
      age: '', 
      grade: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      first: this.state.first,
      last: this.state.last,
      email: this.state.email,
      age: this.state.age,
      grade: this.state.grade
    }
    console.log(newStudent);
    axios.post('http://localhost:3001/add', newStudent)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    window.location = '/students';
  }

  render() {
    return (
      <div className="container">
        <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Add Student Form</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2">First Name</label>
                <div className="col-sm-8">
                  <input type="text" name="first" id="first" className="form-control" value={this.state.first} onChange={this.handleChange.bind(this)} autoFocus/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2">Last Name</label>
                <div className="col-sm-8">
                  <input type="text" name="last" id="last" className="form-control" value={this.state.last} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2">Email</label>
                <div className="col-sm-8">
                  <input type="email" name="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2">Age</label>
                <div className="col-sm-8">
                  <input type="number" name="age" id="age" className="form-control" value={this.state.age} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-2">Grade</label>
                <div className="col-sm-8">
                  <input type="number" name="grade" id="grade" className="form-control" value={this.state.grade} onChange={this.handleChange.bind(this)}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-8">
                  <br/>
                  <button type="submit" className="btn btn-success">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


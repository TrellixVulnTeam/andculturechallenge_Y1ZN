import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>{props.student.first}</td>
    <td>{props.student.last}</td>
    <td>{props.student.email}</td>
    <td>{props.student.age}</td>
    <td>{props.student.grade}</td>
    <td>
        <Link to={"/update/"+props.student._id}>edit</Link> | <a href="#" onClick={() => {if(window.confirm("Delete this item?")) {{ props.deleteStudent(props.student._id) }}}} >delete</a>
    </td>
  </tr>
);

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.deleteStudent = this.deleteStudent.bind(this);

    this.state = {
      students: [],
      shownig: false
    };
  };

  componentDidMount() {
    axios.get('http://localhost:3001/students')
      .then(res => {
        this.setState({students: res.data})
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteStudent(id) {
    axios.delete('http://localhost:3001/students/'+id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })

  };

  studentsList() {
    return this.state.students.map(currentStudent => {
      return <Student student={currentStudent} deleteStudent={this.deleteStudent} key={currentStudent._id}/>;
    })
  }

  render() {
    return (
      <div className="container">
          <div className="panel-heading">
            <h3 className="panel-title">Student List</h3>
          </div>      
          <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.studentsList() }
          </tbody>
        </table>
      </div>
    );
  }
}

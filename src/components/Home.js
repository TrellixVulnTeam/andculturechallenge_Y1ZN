import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
          <div className="panel-heading">
            <h3 className="panel-title">Andculture Coding Challenge</h3>
          </div>      
          <div>
            <p className="yellow-bg">
              This is a coding challenge submission for the interview.
            </p>
            <p className="green-bg">
              You can click on the "Student" button to view a full list of students
            </p>
            <p className="red-bg">
              You can click on the "Add Student" button to add more students.
            </p>
          </div>
      </div>
    );
  }
}

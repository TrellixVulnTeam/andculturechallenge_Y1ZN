import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">AC Challenge</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/students" className="nav-link">Students</Link>
              </li>
              <li className="navbar-item">
                <Link to="/add" className="nav-link">Add Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
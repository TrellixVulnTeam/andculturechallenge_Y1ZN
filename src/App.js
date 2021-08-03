import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Students from "./components/Students";

function App() {
  return (
    <Router>
      <Navbar/>
      <br />
      <Route path="/" exact component={Home} />
      <Route path ="/students" component={Students} />
      <Route path="/add" component={Add}/>
      <Route path="/update/:id" component={Edit}/>
    </Router>
  );
}

export default App;
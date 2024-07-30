import Header from './component/Header';
import './App.css';
import Addstudent from './component/Addstudent';
import AllStudent from './component/AllStudents';
import {BrowserRouter as Router, Route,Routes }from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
    <Header/>
    
  <Routes>
  <Route path="/add" exact Component={Addstudent}/>
  <Route path="/" exact Component={AllStudent}/>
  </Routes>

    </div>
    </Router>

  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import User from './components/User/User';
import Animals from './components/Animals/Animals';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}>
            
          </Route>
          <Route path='/Signup' element={<Signup />}>

          </Route>
          <Route path='/Dashboard' element={<Dashboard />}>

          </Route>
          <Route path='/User' element={<User />}>

          </Route>
          <Route path='/Animals' element={<Animals />}>

          </Route>
      
      
     
    

        </Routes>

      </Router>
    </div>
  );
}

export default App;

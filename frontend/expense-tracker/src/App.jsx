import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/Dashboard" exact element={<Home />} />
          <Route path="/Income" exact element={<Income />} />
          <Route path="/Expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root =() => {
  //Check if token exists in localStorage
  const isAuthenticated = !! localStorage.getItem("token");
  //Redirect to Dashboard if not authenticated,else direct to login
  return isAuthenticated ? (
    <Navigate to="/Dashboard" />
  ) : (
    <Navigate to="/Login" />
  );
};
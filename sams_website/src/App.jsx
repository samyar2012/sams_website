import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/Auth/Signup';
import SignIn from './components/Auth/SignIn';
import Form from './components/Forms/Form';
import Admin_login from "./components/Auth/Admin_login"
import Admin from "./components/admin/Admin"

const App = () => {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Form />} />
        <Route path='/AdminLogin' element={<Admin_login />} />
        <Route path='/Admin' element={<Admin />} /> 
      </Routes>
    </Router>
    </>
  );
};

export default App;

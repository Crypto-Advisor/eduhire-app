import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import Login from './pages/login'
import Apply from './pages/apply'
import Applicants from './pages/applicants'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path ='login' element={<Login />} />
        <Route path ='apply' element={<Apply />} />
        <Route path ='applicants' element={<Applicants />} />
      </Routes>
    </Router>
  );
}

export default App;
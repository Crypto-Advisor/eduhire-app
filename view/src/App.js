import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home'
import LoginPage from './pages/login-page'
import Apply from './pages/apply'
import Applicants from './pages/applicants'
import JobApplicationPage from './pages/jobapplication';
import Applicant from './pages/applicant';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path ='/' element={<Home />} />
        <Route path ='login' element={<LoginPage />} />
        <Route path ='apply' element={<Apply />} />
        <Route path = 'apply/:id' element={<JobApplicationPage />} />
        <Route path ='applicants' element={<Applicants />} />
        <Route path = 'applicants/:id' element={<Applicant />} />
      </Routes>
    </Router>
  );
}

export default App;
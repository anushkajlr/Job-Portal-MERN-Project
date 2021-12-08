import React, { Component } from 'react';
import Downbar from './components/Downbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PostJobs from './components/PostJobs'
import Connections from './components/Connections'
import Login from './components/login'
import Profile from './components/profile'
import SignupUser from './components/SignupUser'
import SignupCompany from './components/SignupCompany'
import CoursesandExams from './components/Coursesandexams';
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <div>
        
        <div className="App">
        <Navbar />
          <Routes><Route exact path='/' element={<Home />} />
          
          <Route path='/PostJobs' element={<PostJobs />} />
          <Route path='/Coursesandexams' element={<CoursesandExams />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/SignupUser' element={<SignupUser />} />
          <Route path='/SignupCompany' element={<SignupCompany />} />
          <Route path='/Connections' element={<Connections />} /> </Routes> 
        </div>
        
        <Downbar id="bottom" />
       </div>
      </BrowserRouter>
    );
  }
}
export default App;

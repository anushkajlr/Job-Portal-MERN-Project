import React, { Component } from 'react';
import Downbar from './components/Downbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Connections from './components/Connections'
import Coursesandexams from './components/Coursesandexams'
import Login from './components/login'
import Profile from './components/profile'
import Signup from './components/Signup'
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
          
          <Route path='/Jobs' element={<Jobs />} />
          <Route path='/Coursesandexams' element={<CoursesandExams />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Connections' element={<Connections />} /> </Routes> 
        </div>
        
        <Downbar id="bottom" />
       </div>
      </BrowserRouter>
    );
  }
}
export default App;

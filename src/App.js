import React, { Component } from 'react';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

function App() {


  return (
    <Router>
        <Link to='/'>Home</Link>

        <Routes>
        <Route path='/' element={<Home/>} />
      
        </Routes>
      </Router>

  );
}

export default App;

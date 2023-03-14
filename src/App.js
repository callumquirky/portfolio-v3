import './App.css';
import React, { components } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Navbar from './components/Header/Navbar';
import About from './components/About'
import Skills from './components/Skills'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import Projects from './components/Pages/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/projects" element={<Projects />}/>
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import './fonts/fonts.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import React, { components } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Sidebar from './components/Sidebar';
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
        <Sidebar />
          <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/projects" element={<Projects />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

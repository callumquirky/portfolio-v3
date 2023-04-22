import './App.css';
import './fonts/fonts.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Pages/Home'
import Contacts from './components/Pages/Contact'
import Projects from './components/Pages/Projects'


function App() {
  return (
    <Router>
      <div>
        <Sidebar />
          <main>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/contacts" element={<Contacts />}/>
            <Route exact path="/projects" element={<Projects />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

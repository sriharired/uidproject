import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Introcuction from './components/Section1/Section1';
import TeamMembers from './components/Section2/Section2';
import ProejctDescription from './components/Section3/Section3';
import Problemstatement from './components/Section4/Section4';
import Technologies from './components/Section5/Section5';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/introduction" element={<Introcuction />} />
          <Route path="/teammembers" element={<TeamMembers />} />
          <Route path="/projectdescription" element={<ProejctDescription />} />
          <Route path="/problemstatement" element={<Problemstatement />} />
          <Route path="/technologies" element={<Technologies />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Introduction from './components/Section1/Section1';
import TeamMembers from './components/Section2/Section2';
import ProjectDescription from './components/Section3/Section3';
import ProblemStatement from './components/Section4/Section4';
import Technologies from './components/Section5/Section5';
import Persona from './components/Section6/Section6';
import Storyboards from './components/section7/section7';
import PaperPrototype from './components/section8/section8';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ComputerPrototype from './components/section9/section9';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section id="introduction">
                  <Introduction />
                </section>
                <section id="teammembers">
                  <TeamMembers />
                </section>
                <section id="projectdescription">
                  <ProjectDescription />
                </section>
                <section id="problemstatement">
                  <ProblemStatement />
                </section>
                <section id="technologies">
                  <Technologies />
                </section>
                <section id="persona">
                  <Persona />
                </section>
                <section id="Storyboards">
                  <Storyboards/>
                </section>
                <section id="PaperPrototype">
                  <PaperPrototype/>
                </section>
                <section id="ComputerPrototype">
                  <ComputerPrototype/>
                </section>
              </div>
            }
          />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/teammembers" element={<TeamMembers />} />
          <Route path="/projectdescription" element={<ProjectDescription />} />
          <Route path="/problemstatement" element={<ProblemStatement />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path='/persona' element={<Persona/>} />
          <Route path='/computerprototype' element={<ComputerPrototype/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

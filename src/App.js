import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Introcuction from './components/Section1/Section1';
import TeamMembers from './components/Section2/Section2';
import ProejctDescription from './components/Section3/Section3';
import Problemstatement from './components/Section4/Section4';
import Technologies from './components/Section5/Section5';
function App() {
  return (
    <div className="App">
      <Menu />
      <Introcuction />
      <TeamMembers/>
      <ProejctDescription />
      <Problemstatement />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;

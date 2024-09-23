import React from 'react';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Introcuction from './components/Section1/Section1';
import TeamMembers from './components/Section2/Section2';

function App() {
  return (
    <div className="App">
      <Menu />
      <Introcuction />
      <TeamMembers/>
      <Footer />
    </div>
  );
}

export default App;

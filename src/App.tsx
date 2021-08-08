import React from 'react';
import './App.css';
import Body from './components/body/body.component';
import Footer from './components/footer/footer.component';
import NavBar from './components/header/header.component';

function App() {
  return (
    <div>
      <div className="NavBarContainer">
        <NavBar />
      </div>
      <div className="bodyContainer">
        <Body/>
      </div>
      <div>
        <Footer/>
      </div>

    </div>

  );
}

export default App;

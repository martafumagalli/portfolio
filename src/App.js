import React from 'react';
import './App.css';
import Nav from './components/nav';
import Foot from './components/foot';
import ReactGA from 'react-ga';

function App() {

  React.useEffect(() => {
  ReactGA.initialize('UA-102409893-1');
  ReactGA.pageview(window.location.pathname);
  },[]);

  return (
    <div className="App">
      <Nav />
      <Foot />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './assets/metastability.png';
import pfp from './assets/pnoun_ocho.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <img className="avatar" src={pfp} />
          <h5>
            vengi.eth
          </h5>
        </div>
      </header>
      <div style={{marginBottom: 150, position: 'relative'}}>
        <h2 style={{fontSize: "36px", position: 'absolute', top: 25, left: 25, color: 'red'}}>
          Mutually <br />Assured <br /><span style={{textDecoration: 'line-through'}}>Destruction</span> <br />Cooperation
        </h2>
        <img src={logo} alt="logo" style={{maxWidth: '800px', width: '100%'}} />
        <h3>Words + Images</h3>
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Words
        </a>
        </p>
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Images
        </a>
        </p>
        <h3>Contributor of</h3>
        <p>
        <a
          className="App-link"
          href="metacartel.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          MetaCartel
        </a>
        </p>
        <p>
        <a
          className="App-link"
          href="https://daohaus.club"
          target="_blank"
          rel="noopener noreferrer"
          >
          DAOhaus
        </a>
        </p>
        <p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          DAOhaus
        </a>
        </p>
      </div>
    </div>
  );
}

export default App;

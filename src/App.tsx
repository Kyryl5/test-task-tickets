/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import TicketsList from './components/TicketsList/TicketsList';
import FiltersPanel from './components/FiltersPanel/FiltersPanel';
import logo from './assets/logo.png';

function App() {

  return (
    <div className="App">         
      <header className="App-header">
        <a href="#">
          <img src={logo} alt="airplane-and-planet-logo" className="App-logo" width="60" height="60"/>
        </a>
      </header>
      <main className="content">
        <FiltersPanel />
        <TicketsList />
      </main>
    </div>
  );
}

export default App;

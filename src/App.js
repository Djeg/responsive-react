import classNames from './App.module.css';
import React, { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={classNames.App}>
      <header className={classNames.header}>
        <div className={classNames.burger} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={classNames.logo}>
          <img src="https://loremflickr.com/320/240" alt="logo" />
        </div>
        <ul className={classNames.tabletMenu}>
          <li>
            <a href="#">Menu 1</a>
          </li>
          <li>
            <a href="#">Menu 2</a>
          </li>
          <li>
            <a href="#">Menu 3</a>
          </li>
          <li>
            <a href="#">Menu 4</a>
          </li>
          <li>
            <a href="#">Menu 5</a>
          </li>
        </ul>
      </header>
      <ul className={`${classNames.menu} ${menuOpen ? classNames.active : ''}`}>
        <li>
          <a href="#">Menu 1</a>
        </li>
        <li>
          <a href="#">Menu 2</a>
        </li>
        <li>
          <a href="#">Menu 3</a>
        </li>
        <li>
          <a href="#">Menu 4</a>
        </li>
        <li>
          <a href="#">Menu 5</a>
        </li>
      </ul>

      <h1>Hello</h1>
    </div>
  );
}

export default App;

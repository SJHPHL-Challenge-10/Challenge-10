import React from 'react';
import '../styles/Header.scss';
import GavelIcon from '@mui/icons-material/Gavel';

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <a href="/">
          <GavelIcon />
        </a>{' '}
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href="/vocabulary">Vocabulary</a>
          </li>
          <li>
            <a href="/judge">Search Judge</a>
          </li>
          <li>
            <a href="/judgeCompare">Compare Judges</a>
          </li>
          <li>
            <a href="/bail">Bail</a>
          </li>
          <li>
            <a>Link 5</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

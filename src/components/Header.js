import React from 'react'
import "../styles/Header.scss"
import GavelIcon from '@mui/icons-material/Gavel';

function Header() {
  return (
    <header className='header'>
        <div className='logo-box'> 
            <GavelIcon />
            <h1>JUDGE</h1>
        </div>

        <nav className="nav">
          <ul>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li><a>Link 3</a></li>
            <li><a>Link 4</a></li>
            <li><a>Link 5</a></li>
          </ul>
        </nav>

    </header>
  )
}

export default Header
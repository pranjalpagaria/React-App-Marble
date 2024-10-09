import React from 'react'
import './Hember.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
// import shadows from '@mui/material/styles/shadows';
import Login from './Login';
import SearchIcon from '@mui/icons-material/Search';



export default function Hemberg() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  };

  const handleClose = () => {
    setShowLogin(false);
  };

  return (
    <div>
      <div className="list">
        <div className="header__search_">
          <input type="text" className="searchInput_" placeholder='search' />
          <SearchIcon className="searchIcon_" ></SearchIcon>
        </div>
        <nav>
          <ul>
            <Link to='/'> <li>Home</li></Link>
            <Link to='/about'> <li>About</li></Link>
            <Link to='/products'> <li>Products</li></Link>
            <Link to='/contacts'> <li>Contact</li></Link>
          </ul>
        </nav>
        <button onClick={handleLogin} className="loginbtn_2">
          LogIn
        </button>
      </div>

      {showLogin && <Login handleClose={handleClose} />}



    </div>
  )
}

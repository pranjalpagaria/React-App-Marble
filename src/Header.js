import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Login from './Login';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Hemberg from './Hemberg';

export default function Header() {
    

    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = () => {
        setShowLogin(true);
    }

    const handleClose = () => {
        setShowLogin(false);
    };

    
    const [showMenu, setShowMenu] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);  // This is how we can toggle it .
    }

    


    return (
        <div>
            <div className="header">

                <Link to='/'><h3 className="logo">PAGARIA MARBLES & GRANITES</h3>
                  
                </Link>

                <div className="header__search">
                    <input type="text" className="searchInput" placeholder='search' />
                    <SearchIcon style={{ fontSize: "40px" }} className="searchIcon" ></SearchIcon>
                </div>

                <div className="header__nav">
                    <nav className="nav-links">
                        <ul>
                            <Link to='/'> <li>Home</li></Link>
                            <Link to='/about'> <li>About</li></Link>
                            <Link to='/products'> <li>Products</li></Link>
                            <Link to='/contacts'> <li>contact</li></Link>
                        </ul>
                    </nav>
                </div>

                <div className="hemberg-menu" >
                 <MenuIcon  style={{ fontSize: "30px" }} className="menu-icon" onClick={handleMenu}> </MenuIcon>
                </div>

                <div className="header__btn">
                    <button button onClick={handleLogin} className="loginbtn">
                        LogIn
                    </button>
                </div>


                

            </div>
            
            { showMenu && <Hemberg />}
            { showLogin && <Login handleClose={handleClose} /> }
            
        </div> 

   
    
        

        
    )
}

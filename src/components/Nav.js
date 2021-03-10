import React from 'react';
import { Link } from 'react-router-dom';
import '../styled-components/Nav.css';
import logo from '../images/knicks-logo.png';

const Nav = () => {
    return (
        <div className="Nav">
            <Link to="/" className='home-link'>
            <img src={logo} className='logo' alt='logo'/>
            </Link>

            <Link to="" className='player-stats-link'>
            <h1>Player Stats</h1>
            </Link>

            <Link to="" className='team-stats-link'>
            <h1>Team Stats</h1>
            </Link>

            <Link to="" className='recent-games-link'>
            <h1>Games</h1>
            </Link>
        </div>
    );
};

export default Nav;
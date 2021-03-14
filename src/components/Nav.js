import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';
import logo from '../images/knicks-logo.png';
import searchIcon from '../images/search-icon.png'
import roster from '../headshots.json'

const Nav = ( ) => {
    return (
        <div className="Nav">
            <Link to="/" className='home-link'>
            <img src={logo} className='logo' alt='logo'/>
            </Link>

            <div className='dropdown'>
            <Link to="/players" className='roster-link'>
            <h1 className='text-size'>ROSTER</h1>
            </Link>
                <div className="dropdown-content">
                    {roster.map(player => 
                        <Link 
                        id="RouterNavLink"
                        to={`/player/${player.id}`}
                        key={player.name}
                        >
                        {player.name}
                        </Link>
                    )}
                </div>
            </div>

            <Link to="/team-stats" className='team-stats-link'>
            <h1 className='text-size'>TEAM STATS</h1>
            </Link>

            <Link to="/games" className='recent-games-link'>
            <h1 className='text-size'>GAMES</h1>
            </Link>

            <Link to="/About" className='about-link'>
            <h1 className='text-size'>ABOUT</h1>
            </Link>

            <img className='search-icon' src={searchIcon} alt='search-icon'/>
        </div>
    );
};

export default Nav;
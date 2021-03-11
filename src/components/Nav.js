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

            <Link to="/players" className='player-stats-link dropdown'>
            <h1>Player Stats</h1>
                <div className="dropdown-content">
                    {roster.map(player => 
                        <Link 
                        id="RouterNavLink"
                        to='/players' 
                        key={player.name}
                        >
                        {player.name}
                        </Link>
                    )}
                </div>
            </Link>

            <Link to="/team-stats" className='team-stats-link'>
            <h1>Team Stats</h1>
            </Link>

            <Link to="/games" className='recent-games-link'>
            <h1>Games</h1>
            </Link>

            <img className='search-icon' src={searchIcon} alt='search-icon'/>
        </div>
    );
};

export default Nav;
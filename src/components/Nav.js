import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="">
            <h1>Home</h1>
            </Link>

            <Link to="">
            <h1>Player Stats</h1>
            </Link>
        </div>
    );
};

export default Nav;
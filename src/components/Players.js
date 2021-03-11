import React from 'react';
import roster from '../headshots.json'
import '../css/Players.css'
import { Link } from 'react-router-dom';


const Players = ( ) => {
    return (
        <div>
            {roster.map(player => {
                return (
                    <div key={player.name}className='card-container'>
                        <Link className='link' to={`/player/${player.id}`}>
                            <div className='player-card'>
                                <img src={player.image} alt={player.name}/>
                                <h4>{player.name}</h4>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Players;
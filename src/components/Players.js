import React from 'react';
import roster from '../headshots.json'
import '../css/Players.css'


const Players = ( ) => {
    return (
        <div>
            {roster.map(player => {
                return (
                    <div>
                        <img src={player.image} alt={player.name}/>
                        <h4>{player.name}</h4>
                    </div>
                )
            })}
        </div>
    );
};

export default Players;
import React from 'react';
import headshots from '../headshots.json'


const Players = ( ) => {
    return (
        <div>
            THIS IS THE PLAYERS PAGE. 
            {headshots.map(player => {
                return (
                    <img src={player.image} alt={player.name}/>
                )
            })}
        </div>
    );
};

export default Players;
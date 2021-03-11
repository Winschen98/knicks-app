import React, { useState, useEffect } from 'react';
import roster from '../headshots.json'


const Player = ({ match }) => {
    console.log(match)
    // const [player, setPlayer] = useState();
    const lastName = 'knox'; 

    useEffect(() => {

        fetch(`https://balldontlie.io/api/v1/players?search=${lastName}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                // setPlayer(res)
            })

    }, []);

    return (
        <div>
            THIS IS THE PAGE FOR A SINGLE PLAYER!! 
            <h1>{match.params.player}</h1>
            <img src={roster[0].image}/>
        </div>
    );
};

export default Player;
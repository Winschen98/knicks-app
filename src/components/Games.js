import React, { useState, useEffect } from 'react';
import '../css/Games.css';
import { Link } from 'react-router-dom';

const Games = ( ) => {
    const [games, setGames] = useState(null);
    const url = "https://www.balldontlie.io/api/v1/games?seasons[]=2020&team_ids[]=20"

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setGames(res.data))      
            .catch(err => {
                alert(`error occurred: ${err}`);
            })
    }, []);

    console.log(games)

    if(!games){
        return <h1>loading...</h1>
    }
    return (
        <div>
            {games.map(game => {
                return(
                    <div className='games_page' key={game.id}>
                        <Link to={`/game/${game.id}`} className='link'>
                            <div key={game.id} className='game_card'>
                                <h4 className='date_text'>{game.date.replace('T00:00:00.000Z','')}</h4>
                                <h5 className='teams_text'>{game.visitor_team.full_name} - {game.home_team.full_name}</h5>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Games;
import React, { useState, useEffect } from 'react';
import '../css/Game.css'

const Game = ({ match }) => {
    const [game, setGame] = useState(null);
    const url = "https://www.balldontlie.io/api/v1/games?seasons[]=2020&team_ids[]=20"

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setGame(res.data.find(item => item.id == match.params.gameID)))      
            .catch(err => {
                alert(`error occurred: ${err}`);
            })
    }, []);

    if (!game){
        return <h2>loading...</h2>
    } 
    return (
        <div className='game_page'>
            <h2 className='final_score'>{game.home_team_score} - {game.visitor_team_score}</h2>
            <div className='container'>
                <div className='home_team'>
                    <h1>HOME</h1>
                    <h2>{game.home_team.full_name}</h2>
                    <h2>({game.home_team.abbreviation})</h2>
                    <h4>{game.home_team.conference}ern conference</h4>
                    <h4>{game.home_team.division} division</h4>
                </div>
                <div className='away_team'>
                    <h1>AWAY</h1>
                    <h2> {game.visitor_team.full_name} </h2>
                    <h2>({game.visitor_team.abbreviation})</h2>
                    <h4>{game.visitor_team.conference}ern conference</h4>
                    <h4>{game.visitor_team.division} division</h4>
                </div>
            </div>
        </div>
    );
};

export default Game;
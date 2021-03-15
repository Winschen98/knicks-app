import React, { useState, useEffect } from 'react';
import roster from '../headshots.json'
import '../css/Player.css'




const Player = ({ match }) => {
    const [player, setPlayer] = useState(null);
    const [stats, setStats] = useState(null); 

    let specificPlayer = roster.find(
    player => player.id === match.params.playerID
    );

    useEffect(() => {
        const url = "https://www.balldontlie.io/api/v1/players/" + match.params.playerID;
        fetch(url)
            .then((res) => res.json())
            .then((res) => setPlayer(res))      
            .catch(err => {
                alert(`error occurred! ${err}`);
            })

        const urlStats = "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=" + match.params.playerID;
        fetch(urlStats)
            .then((res) => res.json())
            .then((res) => setStats(res.data[0]))      
            .catch(err => {
                alert(`error occurred! ${err}`);
            })
        
    }, [match.params.playerID]);


    if (!player || !stats){
        return <h2>loading...</h2>
    } 
    // fill in missing data
    if (player.first_name === "RJ"){
        player.height_feet = '6'
        player.height_inches = '6'
        player.weight_pounds = '214'
    }
    if (player.first_name === "Jared"){
        player.height_feet = '5'
        player.height_inches = '10'
        player.weight_pounds = '175'
    }
    if (player.first_name === "Immanuel"){
        player.height_feet = '6'
        player.height_inches = '3'
        player.weight_pounds = '190'
    }
    if (player.first_name === "Ignas"){
        player.height_feet = '6'
        player.height_inches = '6'
        player.weight_pounds = '221'
    }
    if (player.first_name === "Obi"){
        player.height_feet = '6'
        player.height_inches = '9'
        player.weight_pounds = '220'
    }
    // end of missing data

    return (
        <div className='player_page'>
            <div className='player_card'>
                <div className='player_bio'>
                    <img src={specificPlayer.image} alt={player.first_name} className='headshot'/>
                    <div className='bio_text'>
                        <h1 className='name'>{player.first_name} {player.last_name}</h1>
                        <div>
                            <h3>Height: {player.height_feet}'{player.height_inches}</h3>
                            <h3>Weight: {player.weight_pounds}</h3>
                            <h3>Position: {player.position}</h3>
                        </div>
                    </div>
                </div>
                <div className='player_stat'>
                    <div className='col1'>
                        <h4>{stats.pts} <span>PPG</span></h4> 
                        <h4>{stats.ast} <span>AST</span></h4>
                        <h4>{stats.reb} <span>REB</span></h4>
                        <h4>{stats.blk} <span>BLK</span></h4>
                        <h4>{stats.turnover} <span>TOV</span></h4>
                        <h4>{stats.min} <span>MPG</span></h4>
                    </div>
                    <div className='col2'>
                        <h4>{stats.fg_pct} <span>FG%</span></h4>
                        <h4>{stats.fg3_pct} <span>3P%</span></h4>
                        <h4>{stats.fga} <span>FGA</span></h4>
                        <h4>{stats.fg3a} <span>3FGA </span></h4>
                        <h4>{stats.fg3m} <span>3FGM</span></h4>
                        <h4>{stats.games_played}<span> GP</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;
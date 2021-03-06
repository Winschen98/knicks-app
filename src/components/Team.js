import React, { useState, useEffect } from 'react';
import '../css/Team.css'

const Team = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const url = 'https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2021'

    const [team, setTeam] = useState(null);

    useEffect(() => {
        fetch(`${url}?key=${API_KEY}`)
            .then((res) => res.json())
            .then((res) => {
                const knicks = res.find(item => item.Name === 'New York Knicks')
                setTeam(knicks);
            })      
            .catch(err => {
                alert(`error occurred: ${err}`);
            })
    }, []);

    
    if (!team){
        return <h2>loading...</h2>
    } 
    return (
        <div className='team_page'>
            <h1 className='team_name'>{team.Name}</h1>
            <h2 className='record'><span className='win'>W</span>{team.Wins}-{team.Losses}<span className='loss'>L</span></h2>
            <h2 className='stats_header'>Season Stats {team.Season}</h2>
            <div className='stats'>
                <h3>FGP {team.FieldGoalsPercentage/2}%</h3>
                <h3>TPP {Math.round(team.ThreePointersPercentage/1.7*10)/10}%</h3>
                <h3>FTP {Math.round(team.FreeThrowsPercentage/1.725*10)/10}%</h3>
                <h3>PTS {Math.round(team.Points/team.Games/1.72*10)/10}</h3>
                <h3>REB {Math.round(team.Rebounds/team.Games*10)/10}</h3>
                <h3>OREB {Math.round(team.OffensiveRebounds/team.Games*10)/10}</h3>
                <h3>DREB {Math.round(team.DefensiveRebounds/team.Games*10)/10}</h3>
                <h3>AST {Math.round(team.Assists/team.Games*10)/10}</h3>
                <h3>STL {Math.round(team.Steals/team.Games*10)/10}</h3>
                <h3>BLK {Math.round(team.BlockedShots/team.Games*10)/10}</h3>
                <h3>TOV {Math.round(team.Turnovers/team.Games*10)/10}</h3>
                <h3>FOULS {Math.round(team.PersonalFouls/team.Games*10)/10}</h3>
            </div>
        </div>
    );
};

export default Team;
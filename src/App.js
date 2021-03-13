import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import Games from './components/Games';
import Players from './components/Players'
import Player from './components/Player'
import Game from './components/Game'
import { Route } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

function App( ) {

    // const [games, setGames] = useState(null);
    // const url = "https://www.balldontlie.io/api/v1/games?seasons[]=2020&team_ids[]=20"

    // useEffect(() => {
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((res) => setGames(res.data))      
    //         .catch(err => {
    //             alert(`error occurred: ${err}`);
    //         })
    // }, []);


  return (
    <div className="App">
      <header className='header'>
        <Nav />
      </header>
      <main className='main'>
				<Route path='/' exact component={Home} />
        <Route path='/players' component={Players}/>
        <Route path='/team-stats' component={Team}/>
        <Route path='/Games' component={Games}/>
        <Route 
        path='/game/:gameID' 
        render={(routerProps) => <Game match={routerProps.match}/>}
        />

        <Route 
        path="/player/:playerID" 
        render={(routerProps) => <Player match={routerProps.match}/> } 
        />
      </main>
      <footer className='footer'>
        All imagery, music, trademarks etc. are © Copyright their respective owners. All rights reserved. 
      </footer>
    </div>
  );
}

export default App;

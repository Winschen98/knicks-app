import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import Games from './components/Games';
import Players from './components/Players'
import Player from './components/Player'
import { Route } from 'react-router-dom';

function App( ) {
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

import './styled-components/App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Team from './components/Team';
import Games from './components/Games';
import Players from './components/Players'

import { Route } from 'react-router-dom';
import headshots from './headshots.json';

function App( ) {
  return (
    <div className="App">
      <header className='header'>
        <Nav headshots={headshots}/>
      </header>
      <main className='main'>
				<Route path='/' exact component={Home} />
        <Route path='/players' component={Players}/>
        <Route path='/team-stats' component={Team}/>
        <Route path='/Games' component={Games}/>

				{/* <Route
					path='/details/:id'
					render={(routerProps) => <BirdsDetails match={routerProps.match} />}
				/> */}
      </main>
      <footer className='footer'>
        All imagery, music, trademarks etc. are © Copyright their respective owners. All rights reserved. 
      </footer>
    </div>
  );
}

export default App;

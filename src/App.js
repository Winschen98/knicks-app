import './styled-components/App.css';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Nav />
      </header>
      <main className='main'>
        BODY
      </main>
      <footer className='footer'>
        All imagery, music, trademarks etc. are © Copyright their respective owners. All rights reserved. 
      </footer>
    </div>
  );
}

export default App;

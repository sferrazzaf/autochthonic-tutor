import logo from './logo.svg';
import './App.css';

const quips = [
  "What have you forgotten today?",
  "You're back... again.",
  "Let us expand the limits of your mind.",
  "Without me, you'd be nothing. After all, I am you.",
  "Dark secrets, you say? Where, oh where, did I put the dark secrets?"
]

const getRandomQuip = () => {
  const randomIndex = Math.floor(Math.random() * quips.length);
  return quips[randomIndex]
}

function App() {
  // TODO: Turn into proper React components
  return (
    <div className="App">
      <main className="App-main grid">
        <header className="span-two-grid-columns"></header>
        <div className="search-input-container">
          <div className="search-input-content">
            <p className="quip">{getRandomQuip()}</p>
            <input className="searchbar" type="text"></input> 
          </div> 
        </div>
        <div className="search-result">
          {/* TODO: Add search result components */}
          <p className="content-placeholder">
            Search result content goes here!
          </p>
        </div>
        <footer classname="span-two-grid-columns"></footer>
      </main>
    </div>
  );
}

export default App;

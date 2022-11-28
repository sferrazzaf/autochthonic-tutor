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
  return (
    <div className="App">
      <main className="App-main">
        <p className="quip">{getRandomQuip()}</p>
        <input type="text"></input> 
      </main>
    </div>
  );
}

export default App;

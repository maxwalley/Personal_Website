import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Bun and React!
        </p>
        <p>
          Current time is {Math.floor(Date.now() / 1000)}
        </p>
      </header>
    </div>
  );
}

export default App;

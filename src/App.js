import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Bun and React!
        </p>
        <TimestampDisplay />
      </header>
    </div>
  );
}

class TimestampDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Date.now()
    };

    this.interval = setInterval(() => {
      this.setState(state => ({
        time: Date.now()
      }));
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <p>
        Current time is {Math.floor(this.state.time / 1000)}
      </p>
    );
  }
}

export default App;

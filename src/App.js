import logo from './logo.svg';
import './App.css';
import copyIcon from './icons8-copy-24.png';

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
      <a href="https://icons8.com/icon/86206/copy">Copy icon by icons8</a>
    </div>
  );
}

class TimestampDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
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
      <div>
        <p>
          Current time is {Math.floor(this.state.time / 1000)}
        </p>
        <button onClick={this.onCopyButtonClick.bind(this)}>
          <img src={copyIcon} alt="Copy timestamp" />
        </button>
      </div>
    );
  }

  onCopyButtonClick() {
    navigator.clipboard.writeText(this.state.time);
  }
}

export default App;

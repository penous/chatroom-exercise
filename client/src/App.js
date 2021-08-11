import './App.css';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('http://localhost:8080');

function App() {
  useEffect(() => {
    // socket.on('connect', () => {
    //   console.log('hello');
    // });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

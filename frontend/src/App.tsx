import { useEffect, useState } from 'react';
import PhaserGame from './PhaserGame';
//import * as Colyseus from 'colyseus.js';
//import { environment } from '../environments/environment';

import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    // Create a WebSocket connection to your Colyseus backend
    const newSocket = new WebSocket('wss://your-fly-io-url');

    // WebSocket event listeners
    newSocket.addEventListener('open', (event) => {
      console.log('Connected to Colyseus server.');
    });

    newSocket.addEventListener('message', (event) => {
      console.log('Received data from Colyseus server:', event.data);
      // Handle received data
    });

    newSocket.addEventListener('close', (event) => {
      console.log('WebSocket connection closed:', event);
      // Handle connection closed
    });

    // Set the socket state to the newSocket instance
    setSocket(newSocket);

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'></header>
      <main>
        <PhaserGame socket={socket} />
      </main>
    </div>
  );
}

export default App;

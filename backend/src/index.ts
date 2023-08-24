/**
 * IMPORTANT:
 * ---------
 * Do not manually edit this file if you'd like to host your server on Colyseus Cloud
 *
 * If you're self-hosting (without Colyseus Cloud), you can manually
 * instantiate a Colyseus Server as documented here:
 *
 * See: https://docs.colyseus.io/server/api/#constructor-options
 */
//import { listen } from '@colyseus/tools';

// Import Colyseus config
//import app from './app.config';

// Create and listen on 2567 (or PORT environment variable.)
//listen(app);

// Colyseus + Express
import { Server } from 'colyseus';
import { createServer } from 'http';
import express from 'express';
import { WebSocketTransport } from '@colyseus/ws-transport';
const port: number = Number(process.env.PORT) || 3000;

const app = express();
app.use(express.json());

const gameServer = new Server({
  transport: new WebSocketTransport({
    server: createServer(app),
  }),
});

gameServer.listen(port);

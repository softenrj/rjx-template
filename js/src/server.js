import "dotenv/config"
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import http from 'http';
import logger from "primelogger";
import { NodeEnvs } from './common/constants/ENV.js';
import router from './route.js';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Server
const app = express();
const server = http.createServer(app);
const NodeEnv = process.env.NodeEnv || 'development'

// CORS
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Logging & Security
if (NodeEnv === NodeEnvs.Development) {
  app.use(morgan('dev'));
} else if (NodeEnv === NodeEnvs.Production) {
  app.use(morgan('combined'));
  app.use(helmet());
}

// Routes
router(app);

// Error Handler
app.use((err, _req, res, next) => {
  if (NodeEnv !== NodeEnvs.Test) {
    logger.error(err);
  }

  const status = err;
  res.status(status).json({
    error: err
  });

  return next(err);
});

export default app;

import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import { dbConnection } from './db.js';
import dotenv from 'dotenv';
dotenv.config();

// Routes
import pollsRoutes from './routes/polls.js';

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors());

// API
app.use('/api/polls', pollsRoutes);

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`Server is running on http://localhost:${PORT}`);
});

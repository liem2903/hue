import express from 'express';
import Anthropic from '@anthropic-ai/sdk';  
import claudeRouter from './routes';
import dotenv from 'dotenv';

dotenv.config();  

const app = express();

app.use(express.json());
app.use('/api/claude', claudeRouter);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
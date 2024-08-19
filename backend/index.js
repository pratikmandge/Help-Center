import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cardRoutes from './routes/cards.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const corsOptions = {
  origin: process.env.FRONT_END_URL,
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.use(bodyParser.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.get('/ping', (req, res) => {
  res.send(`Server running on port ${PORT}...`);
});

app.use('/api', cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

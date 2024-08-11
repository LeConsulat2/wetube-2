import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

mongoose.connect(process.env.DB_URL, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('✅  Connected to DB');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅  Listening on: http://localhost:${PORT}`);
});

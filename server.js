import express from 'express';
import mongoose from 'mongoose';
import brandRoutes from './routes/brand.routes.js';

const app = express();

app.use(express.json());

app.use('/api/brands', brandRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/ieeetask2')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

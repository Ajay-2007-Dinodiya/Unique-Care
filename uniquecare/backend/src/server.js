import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';
import issueRoutes from './routes/issueRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/issues', issueRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});

export default app;

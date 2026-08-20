import mongoose from 'mongoose';

// Connect to MongoDB database
export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ucare';
    const conn = await mongoose.connect(mongoUri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ DB Connection Error: ${error.message}`);
    console.warn(`💡 Tip: Ensure MongoDB service is running or set MONGODB_URI in backend/.env`);
  }
};

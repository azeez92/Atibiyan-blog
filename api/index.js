import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.log('MongoDB connection error:', err);
    });


const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

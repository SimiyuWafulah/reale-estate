import express from 'express';
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import dotenv from 'dotenv'
dotenv.config();


const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO).then( () => {
    console.log('Connected to Database');
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log('Server is running!')
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
import express from 'express';
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import dotenv from 'dotenv'
dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO).then( () => {
    console.log('Connected to Database');
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log('Server is running!')
});

app.use('/api/user', userRouter);
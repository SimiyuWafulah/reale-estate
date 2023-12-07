import express from 'express';
import userRouter from './routes/user.route.js'

const app = express();

app.listen(3000, () => {
    console.log('Server is running!')
});

app.use('/api/user', userRouter);
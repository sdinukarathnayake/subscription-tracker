import express from 'express';

import { PORT } from './config/env.js';

// connect routes to app
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.router.js';

const app = express();

// 
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('API Working..');
});

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}..`);
});

export default app;
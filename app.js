import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome..')
});

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}..`);
});

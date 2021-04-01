import express from 'express';

const app = express();

app.use(express.json());

require('./routes/index')(app);

export { app }
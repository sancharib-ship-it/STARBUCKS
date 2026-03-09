import express from 'express';
import homeRoute from './routes/home';
const app = express();
app.use(express.json());
app.use('/home', homeRoute);
app.get('/', (req, res) => res.send('Starbucks Backend Running!'));
app.listen(3000, () => console.log('API running on :3000'));
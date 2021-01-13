import express from 'express';
import envSelector from '../config/env-selector';
import { routes } from './routes/index';

const app = express();

// all static assets to be referred from public folder
app.use(express.static("public"));

// Select the config file based on environment
envSelector();

// Middleware for parsing incoming request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// all static assets to be referred from /public folder
// app.use('/btt-assets', express.static('public'))

routes(app);

app.listen(process.env.PORT, () => console.log(`Listening to port ${process.env.PORT}`));
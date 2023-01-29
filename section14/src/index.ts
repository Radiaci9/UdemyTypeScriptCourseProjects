import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';

import './controllers/LoginController';
import './controllers/RootController';
import AppRouter from './AppRouter';

const router = AppRouter.getInstance();

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({ keys: ['keeey']}));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

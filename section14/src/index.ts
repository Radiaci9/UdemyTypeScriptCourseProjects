import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express, {Request, Response} from 'express';

import { router } from './loginRoutes';

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({ keys: ['keeey']}));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

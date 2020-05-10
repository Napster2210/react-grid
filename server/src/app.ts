import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import userRouter from './routes/user';
import { ValidationError } from 'express-validation';
import db from './config/db';

dotenv.config();
if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/users', userRouter);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next(createError(404));
});

// error handler
app.use((err, _req, res, _next) => {
  console.log('Error', err);
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err);
});

app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`server is listening on ${PORT}`);
  db.connect();
  return true;
});
import { app } from './routes/app';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/AppError';

const _PORT = 1102;

app.use((error: Error, req: Request, reply: Response, nxt: NextFunction) => {
  if (error instanceof AppError) {
    return reply
      .status(error.statusCode)
      .json({ message: `${error.message}-${error.module}` });
  }

  reply.send(error);
  nxt();
});

app.listen(_PORT, () => {
  console.log(`The server is running at port ${_PORT}`);
});

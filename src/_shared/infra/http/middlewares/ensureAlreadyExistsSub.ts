import { Request, Response, NextFunction } from 'express';
import { prisma } from '../../../prisma/prisma';
import { AppError } from '../../../errors/AppError';

interface IRequest {
  email: string;
}

export const ensureAlreadyExistsSub = async (
  req: Request,
  reply: Response,
  nxt: NextFunction,
) => {
  const { email } = req.body as IRequest;
  const sub = await prisma.sub.findFirst({ where: { email: email } });

  if (sub !== null) {
    throw new AppError('This email already in use!', 400);
  }

  nxt();
};

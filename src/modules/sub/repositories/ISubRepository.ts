import { Sub } from '@prisma/client';

export interface ISubRepository {
  create(name: string, email: string): Promise<void>;
  findOne(email: string): Promise<Sub | null>;
  findById(id: string): Promise<Sub | null>;
  findByBlock(block: string): Promise<Sub[]>;
}

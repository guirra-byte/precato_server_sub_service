import { prisma } from '../../../../../_shared/prisma/prisma';
import { Sub } from '@prisma/client';
import { ISubRepository } from '../../../repositories/ISubRepository';

export class SubRepository implements ISubRepository {
  private ormRepository: typeof prisma.sub;

  constructor() {
    this.ormRepository = prisma.sub;
  }

  async create(name: string, email: string): Promise<void> {
    await this.ormRepository.create({
      data: { name: name, email: email, block: 'INBOUND' },
    });
  }

  async findOne(email: string): Promise<Sub | null> {
    const sub = await this.ormRepository.findFirst({
      where: { email: email },
    });

    return sub;
  }

  async findById(id: string): Promise<Sub | null> {
    const sub = await this.ormRepository.findUnique({ where: { id: id } });
    return sub;
  }

  async findByBlock(block: string): Promise<Sub[]> {
    const subs = await this.ormRepository.findMany({ where: { block: block } });
    return subs;
  }
}

import { ISubRepository } from '../repositories/ISubRepository';

export class CreateSubService {
  constructor(private subRepository: ISubRepository) {}

  async execute(name: string, email: string): Promise<void> {
    await this.subRepository.create(name, email);
  }
}

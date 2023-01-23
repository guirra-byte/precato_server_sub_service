import { createContainer, asClass } from 'awilix';
import { SubRepository } from '../../../modules/sub/infra/prisma/repositories/SubRepository';
import { CreateSubService } from '../../../modules/sub/services/CreateSubService';

const container = createContainer({ injectionMode: 'CLASSIC' });

container.register(
  'subRepository',
  asClass(SubRepository, { lifetime: 'SINGLETON' }),
);

container.register(
  'createSubService',
  asClass(CreateSubService, { lifetime: 'SINGLETON' }),
);

export { container };

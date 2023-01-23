import { container } from '../../../../../_shared/infra/container/index';
import { Request, Response } from 'express';
import { CreateSubService } from '../../../services/CreateSubService';

interface IRequest {
  name: string;
  email: string;
}

export class CreateSubController {
  async handle(request: Request, reply: Response): Promise<Response> {
    const { name, email } = request.body as IRequest;

    const createSubService: CreateSubService =
      container.resolve('createSubService');

    await createSubService.execute(name, email);

    return reply.status(201).send();
  }
}

import { CreateSubController } from '../controllers/CreateSubController';
import { Router } from 'express';

const subRouter = Router();

const createSubController = new CreateSubController();

subRouter.post('/', createSubController.handle);

export { subRouter };

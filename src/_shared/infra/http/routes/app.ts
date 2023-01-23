import express from 'express';
import { subRouter } from '../../../../modules/sub/infra/http/routes/sub.routes';
import { ensureAlreadyExistsSub } from '../middlewares/ensureAlreadyExistsSub';

const app = express();
app.use(express.json());

app.use('/sub', ensureAlreadyExistsSub, subRouter);

export { app };

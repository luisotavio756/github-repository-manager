import { Router } from 'express';
import RepositoriesController from './controllers/RepositoriesController';

const routes = Router();

routes.get('/repositories', RepositoriesController.index);
routes.post('/repositories', RepositoriesController.store);
routes.delete('/repositories/:id', RepositoriesController.destroy);

export default routes;
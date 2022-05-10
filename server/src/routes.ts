import { Router } from 'express';
import { CreateFeedbackController } from './useCases/feedback/CreateFeedbackController';

const routes = Router();

const creteFeedbackController = new CreateFeedbackController();

routes.post('/feedback', creteFeedbackController.handle);

export { routes };
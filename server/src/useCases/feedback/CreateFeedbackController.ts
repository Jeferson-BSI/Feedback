import { Request, Response } from 'express';
import { NodemailerMailProvider } from '../../providers/nodemailer/NodemailerMailProvider';
import { FeedbackRepository } from '../../repositories/prisma/FeedBackRepository';
import { CreateFeedbackUseCase } from './CreateFeedbackUseCase';


class CreateFeedbackController {

  async handle(request: Request, response: Response): Promise<Response> {   
    const { type, comment, screenshot } = request.body;

    const repository = new FeedbackRepository();

    const mailProvider = new NodemailerMailProvider();
    
    const createFeedbackUseCase = new CreateFeedbackUseCase(repository, mailProvider);

    const feedback = await createFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })

    return response.status(200).json(feedback);
  }
}


export { CreateFeedbackController};
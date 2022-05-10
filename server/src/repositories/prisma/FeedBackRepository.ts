import { prisma, Feedback } from './../../prisma';
import { FeedbackDTO } from "../dtos/FeedbackDTO";
import { IFeedbackRepository } from "../IFeedbackRepository";

class FeedbackRepository implements IFeedbackRepository {

  async create({type, comment, screenshot}: FeedbackDTO): Promise<Feedback> {

    const feedback = await prisma.feedback.create({
      data: { 
        type, 
        comment,
        screenshot
      }});

      return feedback;
    }
} 

export { FeedbackRepository }
import { Feedback } from './../prisma';
import { FeedbackDTO } from "./dtos/FeedbackDTO";


interface IFeedbackRepository {
  create(feedback: FeedbackDTO): Promise<Feedback>; 
}

export {IFeedbackRepository };
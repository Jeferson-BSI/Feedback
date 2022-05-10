import { Feedback } from "@prisma/client";
import { FeedbackDTO } from "../dtos/FeedbackDTO";
import { IFeedbackRepository } from "../IFeedbackRepository";

class FeedbackRepositoryInMemory implements IFeedbackRepository{
  private repository: Feedback[];

  constructor(){
    this.repository = [];
  }
  create({type, comment, screenshot}: FeedbackDTO): Promise<Feedback> {
    const feedback = new Feedback(type, comment, screenshot);
  };
}

export { FeedbackRepositoryInMemory };
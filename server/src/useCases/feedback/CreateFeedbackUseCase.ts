import { IMailProvider } from "../../providers/IMailProvider";
import { FeedbackDTO } from "../../repositories/dtos/FeedbackDTO";

import { IFeedbackRepository } from "../../repositories/IFeedbackRepository";


class CreateFeedbackUseCase {
  constructor(
    private feedbackRepository: IFeedbackRepository,
    private mailProvider: IMailProvider
  ){}

  async execute({type, comment, screenshot}: FeedbackDTO) {

    if(!type) {
      throw new Error('Type is required.');
    }

    if(!comment) {
      throw new Error('Comment is required.');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format.');
    }

    const feedback = await this.feedbackRepository.create({
      type, 
      comment, 
      screenshot
    });


    await this.mailProvider.sendEmail({
      subject: '',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot? `<img src='${screenshot}'>`: null,
        `</div>`
      ].join('')
    })

    return feedback;
  }

};

export { CreateFeedbackUseCase};
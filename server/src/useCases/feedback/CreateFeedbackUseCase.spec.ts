import { Feedback } from "@prisma/client";
import { CreateFeedbackUseCase } from "./CreateFeedbackUseCase";


let createFeedbackUseCase: CreateFeedbackUseCase;
const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe("Create a Feedback", () => {
  beforeEach(() => {
    createFeedbackUseCase = new CreateFeedbackUseCase(
      { create: createFeedbackSpy},
      { sendEmail: sendEmailSpy}

    );
  })

  it("Should be able to create a new Feedback", async () => {
    await expect(createFeedbackUseCase.execute({
      type: "BUG",
      comment: "example comment",
      screenshot: "data:image/png;base64,asdasdasdasdasd"
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendEmailSpy).toHaveBeenCalled();

  });

  it("Should not be able to create a Feedback without a type", async () => {
    await expect(createFeedbackUseCase.execute({
      type: '',
      comment: "example comment",
      screenshot: "data:image/png;base64,asdasdasdasdasd"
    })).rejects.toEqual(new Error('Type is required.'));
  });


  it("Should not be able to create a Feedback without a comment", async () => {

    await expect(createFeedbackUseCase.execute({
      type: 'BUG',
      comment: "",
      screenshot: "data:image/png;base64,asdasdasdasdasd"
    })).rejects.toEqual(new Error('Comment is required.'));
  });

    it("Should not be able to create new Feedback with an invalid screenshot", async () => {

    await expect(createFeedbackUseCase.execute({
      type: 'BUG',
      comment: "example comment",
      screenshot: "test.png"
    })).rejects.toEqual(new Error('Invalid screenshot format.'));
  });

});
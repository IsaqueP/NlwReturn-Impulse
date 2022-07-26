import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()


const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg',
    })).resolves.not.toThrow();
  })

  expect(createFeedbackSpy).toHaveBeenCalled()
  expect(sendMailSpy).toHaveBeenCalled()
})

describe('Should not be able to submit feedback without type', async () => {
  await expect(submitFeedback.execute({
    type: '',
    comment: 'example comment',
    screenshot: 'example.jpg',
  })).rejects.toThrow();
})
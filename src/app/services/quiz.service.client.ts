import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  submit = (quizId, answer) =>
    fetch('http://localhost:3000/api/quiz/' + quizId + '/submission', {
      method: 'post',
      body: JSON.stringify(answer),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.status);

  findAllQuizzes = () =>
    fetch('http://localhost:3000/api/quiz')
      .then(response => response.json());

  findQuizById = quizId =>
    fetch('http://localhost:3000/api/quiz/' + quizId)
      .then(response => response.json());

  findSubmissionByQuizId = quizId =>
    fetch('http://localhost:3000/api/quiz/' + quizId + '/submission')
      .then(response => response.json());

  findSubmissionById = submissionId =>
    fetch('http://localhost:3000/api/submission/' + submissionId)
      .then(response => response.json());

  findAllSubmission = () =>
    fetch('http://localhost:3000/api/quiz/allSubmission')
      .then(response => response.json());

}

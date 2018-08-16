import {Injectable} from '@angular/core';

const LOCAL = 'http://localhost:3000/api/';
const HEROKU = 'https://ciyingzuo-webdev-hw4server.herokuapp.com/api/';
const QUIZ_URL = HEROKU;

@Injectable()
export class QuizServiceClient {
  submit = (quizId, answer) =>
    fetch(QUIZ_URL + 'quiz/' + quizId + '/submission', {
      method: 'post',
      body: JSON.stringify(answer),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.status);

  findAllQuizzes = () =>
    fetch(QUIZ_URL + 'quiz')
      .then(response => response.json());

  findQuizById = quizId =>
    fetch(QUIZ_URL + 'quiz/' + quizId)
      .then(response => response.json());

  findSubmissionByQuizId = quizId =>
    fetch(QUIZ_URL + 'quiz/' + quizId + '/submission')
      .then(response => response.json());

  findSubmissionById = submissionId =>
    fetch(QUIZ_URL + 'submission/' + submissionId)
      .then(response => response.json());

  findAllSubmission = () =>
    fetch(QUIZ_URL + 'quiz/allSubmission')
      .then(response => response.json());

}

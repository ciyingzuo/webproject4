import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];

  constructor(private router: Router,
              private service: QuizServiceClient) {
  }

  takeQuiz(quizId) {
    this.router.navigate(['quiz/' + quizId]);
  }

  viewSubmission(quizId) {
    this.router.navigate(['quiz/' + quizId + '/submissions']);
  }

  submissionPage(quizId) {
    this.router.navigate(['quiz/0/submissions']);
  }

  ngOnInit() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

}

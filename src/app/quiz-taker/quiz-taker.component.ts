import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  quizId = '';
  quiz = {title: '', question: []};
  answer = [];
  score = 0;

  submitQuiz = quiz => {
    for (let i = 0; i < quiz.question.length; i++) {
      if (quiz.question[i].answer == this.answer[i]) {
        this.score += quiz.question[i].point;
      }
    }
    this.service
      .submit(this.quizId, this.answer)
      .then((status) => {
          alert('Submission success, you score is ' + this.score);
          this.router.navigate(['quiz']);
        }
      );
  };

  cancle(){
    this.router.navigate(['quiz']);
  }

  ngOnInit() {
    // this.activatedRoute.params
    //   .subscribe(params => this.service
    //     .findQuizById(params['quizId'])
    //     .then(quiz => this.quiz = quiz));
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.service.findQuizById(this.route.snapshot.paramMap.get('quizId')).then(quiz => {
      this.quiz = quiz;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  quizId = '';
  quiz = {title: '', question: []};
  submission = {answer: []};


  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.service.findSubmissionById(this.route.snapshot.paramMap.get('submissionId')).then(submission => {
      this.submission = submission;
      this.service.findQuizById(submission.quiz).then(quiz => {
        this.quiz = quiz;
      });
    });
  }

}

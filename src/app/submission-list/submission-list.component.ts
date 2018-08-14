import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';


@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute,
              private router: Router) {
  }

  filterActive = 'no';
  filter = '';
  quizId = '';
  submission = [];
  isAdmin = 'nonAdmin';
  username = '';

  viewAnswer(submissionId) {
    this.router.navigate(['quiz/' + this.quizId + '/submission/' + submissionId]);
  }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    if (this.route.snapshot.paramMap.get('quizId') === '0') {
      this.service.findAllSubmission().then(submission => {
        this.submission = submission;
      });
    } else {
      this.service.findSubmissionByQuizId(this.route.snapshot.paramMap.get('quizId')).then(submission => {
        this.submission = submission;
      });
    }

    this.userService.currentUser().then(user => {
      if (user.username === 'admin') {
        this.isAdmin = 'admin';
      } else {
        this.username = user.username;
      }
    });
  }

}

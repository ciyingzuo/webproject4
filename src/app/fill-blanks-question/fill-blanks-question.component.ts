import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fill-blanks-question',
  templateUrl: './fill-blanks-question.component.html',
  styleUrls: ['./fill-blanks-question.component.css']
})
export class FillBlanksQuestionComponent implements OnInit {

  @Input() question;
  @Input() answer;
  @Input() index;

  rawAnswer = [];

  constructor() {
  }

  ngOnInit() {
    // this.question.fillBlanksAnswers = {};
  }

}

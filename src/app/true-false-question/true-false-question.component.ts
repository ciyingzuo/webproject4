import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input() question;
  @Input() answer;
  @Input() index;

  constructor() {
  }

  selected = trueOrFalse => {
    if (trueOrFalse) {
      this.answer[this.index] = 'true';
    } else {
      this.answer[this.index] = 'false';
    }
  };

  ngOnInit() {
  }

}

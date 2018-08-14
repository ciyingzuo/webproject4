import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input() question;
  @Input() answer;
  @Input() index;

  constructor() {
  }

  option = [];

  selected = choice => {
    this.answer[this.index] = choice;
  };

  ngOnInit() {
    this.option = this.question.text.splice(1);
  }

}

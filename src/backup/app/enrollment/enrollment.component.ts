import { Component, OnInit } from '@angular/core';
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = []

  constructor(private sectionService: SectionServiceClient) { }

  enroll = sectionId =>
    this.sectionService
      .enroll(sectionId)
  
  ngOnInit() {
    this.sectionService
      .findAllSections()
      .then(sections => this.sections = sections);
  }

}

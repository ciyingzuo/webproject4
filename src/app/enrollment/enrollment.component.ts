import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  sections = [];

  constructor(private route: ActivatedRoute,
              private sectionService: SectionServiceClient) {
  }

  enroll = sectionId =>
    this.sectionService
      .enroll(sectionId).then((status) => {
      if (status === 200) {
        alert('enroll success');
      } else {
        alert('enroll failed');
      }
    })

  ngOnInit() {
    this.sectionService
      .findSectionsForCourse(this.route.snapshot.paramMap.get('courseId'))
      .then(sections => this.sections = sections);
  }

}

import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = [];
  sections = [];
  selectedCourse = {
    id: -1
  };
  section = {};
  seat;
  title;

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) {
  }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
  };

  updateSection = (section) => {
    this.sectionService.updateSection(section).then(newSection => {
      return this.sectionService
        .findSectionsForCourse(this.selectedCourse.id);
    })
      .then(sections => this.sections = sections);
  };


  addSection = section => {
    section.courseId = this.selectedCourse.id;
    section.seat = 0;
    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
  };

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}

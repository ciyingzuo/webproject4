import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  courses = [];
  sections = [];
  selectedCourse = {
    title: '',
    id: -1
  };
  section = {title: ''};
  seat;
  title;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient) {
  }

  profilePage() {
    this.router.navigate(['profile']);
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

  deleteSection = section => {
    this.sectionService.deleteSection(section).then(newSection => {
      return this.sectionService
        .findSectionsForCourse(this.selectedCourse.id);
    })
      .then(sections => this.sections = sections);
  };

  addSection = section => {
    if (section.title === undefined) {
      section.title = 'Course ' + this.selectedCourse.title + ' Section ' + (this.sections.length + 1);
    }
    section.courseId = this.selectedCourse.id;
    section.seat = 0;
    this.sectionService
      .createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
    section.title = undefined;
  };

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}

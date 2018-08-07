import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  currentCourse = {};
  currentModule = {};
  currentLesson = {};

  constructor(private router: Router,
              private courseService: CourseServiceClient) {
  }

  selectCourse(course) {
    this.currentCourse = course;
    this.currentModule = {};
    this.currentLesson = {};
  }

  selectModule(module) {
    this.currentModule = module;
    this.currentLesson = {};
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }

  enrollPage(courseId) {
    this.router.navigate(['enrollment/' + courseId]);
  }

  ngOnInit() {
    this.courseService
      .findAllCourses()
      .then(courses => this.courses = courses);
  }

}

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
  currentLesson = {topic: []};
  topic = {};

  constructor(private router: Router,
              private courseService: CourseServiceClient) {
  }

  selectCourse(course) {
    this.currentCourse = course;
    this.currentModule = {};
    this.currentLesson = {topic: []};
    this.topic = {};
  }

  selectModule(module) {
    this.currentModule = module;
    this.currentLesson = {topic: []};
    this.topic = {};
  }

  selectLesson(lesson) {
    this.currentLesson = lesson;
    if (this.currentLesson.topic.length > 1) {
      this.topic = this.currentLesson.topic[1];
    } else {
      this.topic = {};
    }

  }

  profilePage() {
    this.router.navigate(['profile']);
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

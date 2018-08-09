import {Component, OnInit} from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

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
  sections = [];

  constructor(private router: Router,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }

  selectCourse(course) {
    console.log(this.courses)
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
    let crs = [];
    this.courseService
      .findAllCourses()
      .then(courses => {
        this.courses = courses;
        crs = courses;
      });


    this.userService.currentUser()
      .then(user =>
          this.sectionService.findSectionForUser(user._id)
            .then(sections => {
                for (let c of crs) {
                  console.log("pr");
                  c.visibility = 'false';
                }

                for (let c of crs) {
                  for (let section of sections) {
                    if (section.section.course == c.id || c.visibility == 'PUBLIC') {
                      c.visibility = 'true';
                    }
                  }
                }

                this.courses = crs;
              }
            )
        , err => {
          for (let c of crs) {
            if (c.visibility == 'PUBLIC') {
              c.visibility = 'true';
            } else {
              c.visibility = 'false';
            }
          }
          this.courses = crs;
        });

    // {'active': course.id == currentCourse.id}
  }

}

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
  crs = [];

  constructor(private router: Router,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private userService: UserServiceClient) {
  }

  selectCourse(course) {
    if (course.visibility == 'false') {
      alert('Private content');
      return;
    }
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
      .then(courses => {
        // this.test(crs)
        // this.courses = courses;
        // crs = courses;
        this.userService.currentUser()
          .then(user =>
              this.sectionService.findSectionForUser(user._id)
                .then(sections => {
                    for (let c of courses) {
                      if (sections.length == 0) {
                        if (c.visibility == 'PRIVATE') {
                          c.visibility = 'false';
                        }
                      } else {
                        for (let section of sections) {
                          if (section.section.courseId != c.id && c.visibility == 'PRIVATE') {
                            c.visibility = 'false';
                          }
                        }
                      }
                    }
                    this.courses = courses;

                  }
                )
            , err => {
              for (let c of courses) {
                if (c.visibility == 'PRIVATE') {
                  c.visibility = 'false';
                }
              }
              this.courses = courses;
            });
      });

  }

}

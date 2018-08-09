
import {Injectable} from '@angular/core';
const COURSE_LOCAL = 'http://localhost:8080/api/course';
const COURSE_HEROKU = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/course'
@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch(COURSE_HEROKU)
      .then(response => response.json());
  }
}

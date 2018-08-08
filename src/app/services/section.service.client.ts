import {Injectable} from '@angular/core';

const LOCAL = 'http://localhost:3000/api/';
const HEROKU = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/course';

@Injectable()
export class SectionServiceClient {

  enroll = (section, userId) =>
    fetch(LOCAL + 'student/' + userId + '/section/' + section._id, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(section)
    }).then(response => response.status);

  drop = (section, userId) =>
    fetch(LOCAL + 'student/' + userId + '/section/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    });

  findAllSections = () =>
    fetch(LOCAL + 'section')
      .then(response => response.json());

  findSectionForUser = (userId) =>
    fetch(LOCAL + 'student/' + userId + '/section')
      .then(response => response.json());

  findSection = (sectionId) =>
    fetch(LOCAL + 'section/' + sectionId)
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch(LOCAL + 'course/' + courseId + '/section')
      .then(response => response.json());

  deleteSection = (section) =>
    fetch(LOCAL + 'section/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    });

  updateSection = (section) =>
    fetch(LOCAL + 'section/' + section._id, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)

    });

  createSection = section =>
    fetch(LOCAL + 'course/:courseId/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json());
}

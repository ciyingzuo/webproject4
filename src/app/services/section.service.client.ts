import {Injectable} from '@angular/core';

const LOCAL = 'http://localhost:3000/api/';
const HEROKU = 'https://ciyingzuo-webdev-hw4server.herokuapp.com/api/';
const SECTION_URL = LOCAL;

@Injectable()
export class SectionServiceClient {

  enroll = (section, userId) =>
    fetch(SECTION_URL + 'student/' + userId + '/section/' + section._id, {
      method: 'post',
      credentials: 'include',
      body: JSON.stringify(section)
    }).then(response => response.status);

  drop = (section, userId) =>
    fetch(SECTION_URL + 'student/' + userId + '/section/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    });

  findAllSections = () =>
    fetch(SECTION_URL + 'section')
      .then(response => response.json());

  findSectionForUser = (userId) =>
    fetch(SECTION_URL + 'student/' + userId + '/section')
      .then(response => response.json());

  findSection = (sectionId) =>
    fetch(SECTION_URL + 'section/' + sectionId)
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch(SECTION_URL + 'course/' + courseId + '/section')
      .then(response => response.json());

  deleteSection = (section) =>
    fetch(SECTION_URL + 'section/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    });

  updateSection = (section) =>
    fetch(SECTION_URL + 'section/' + section._id, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)

    });

  createSection = section =>
    fetch(SECTION_URL + 'course/:courseId/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json());
}

import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = (sectionId, userId) =>
    fetch('http://localhost:3000/api/student/' + userId + '/section/' + sectionId, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.status);

  drop = (sectionId, userId) =>
    fetch('http://localhost:3000/api/student/' + userId + '/section/' + sectionId, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      // body: JSON.stringify(section)
    });

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json());

  findSectionForUser = (userId) =>
    fetch('http://localhost:3000/api/student/' + userId + '/section')
      .then(response => response.json());

  findSection = (sectionId) =>
    fetch('http://localhost:3000/api/section/' + sectionId)
      .then(response => response.json());

  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json());

  deleteSection = (section) =>
    fetch('http://localhost:3000/api/section/' + section._id, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    });

  updateSection = (section) =>
    fetch('http://localhost:3000/api/section/' + section._id, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)

    });

  createSection = section =>
    fetch('http://localhost:3000/api/course/:courseId/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json());
}

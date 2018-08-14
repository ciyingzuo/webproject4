import {Injectable} from '@angular/core';

@Injectable()
export class SectionServiceClient {

  enroll = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'put',
      credentials: 'include'
    })

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())

  findSectionsForCourse = courseId =>
    fetch('http://localhost:3000/api/course/' + courseId + '/section')
      .then(response => response.json())

  createSection = section =>
    fetch('http://localhost:3000/api/section', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())
}

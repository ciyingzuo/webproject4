import {Injectable} from '@angular/core';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());

  logout() {
    console.log('LOG_OUT');
    fetch('http://localhost:3000/logout', {
      credentials: 'include'
    });
  }

  register = (user) =>
    fetch('http://localhost:3000/user', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  deleteUser = (user) =>
    fetch('http://localhost:3000/user', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  updateUser = (user) =>
    fetch('http://localhost:3000/user', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  currentUser = () =>
    fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(response => response.json());

  queryUser = (username) =>
    fetch('http://localhost:3000/user/exist/' + username, {
      credentials: 'include'
    }).then(response => response.status);
}

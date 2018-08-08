import {Injectable} from '@angular/core';

const LOCAL = 'http://localhost:3000/';
const HEROKU = 'https://ciyingzuo-webdev-hw1.herokuapp.com/api/course';

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(LOCAL + 'login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());

  logout() {
    fetch(LOCAL + 'logout', {
      credentials: 'include'
    });
  }

  register = (user) =>
    fetch(LOCAL + 'user', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  deleteUser = (user) =>
    fetch(LOCAL + 'user', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  updateUser = (user) =>
    fetch(LOCAL + 'user', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  currentUser = () =>
    fetch(LOCAL + 'currentUser', {
      credentials: 'include'
    }).then(response => response.json());

  queryUser = (username) =>
    fetch(LOCAL + 'user/exist/' + username, {
      credentials: 'include'
    }).then(response => response.status);
}

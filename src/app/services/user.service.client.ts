import {Injectable} from '@angular/core';

const LOCAL = 'http://localhost:3000/';
const HEROKU = 'https://ciyingzuo-webdev-hw4server.herokuapp.com/';
const USER_URL = HEROKU;

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(USER_URL + 'login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(response => response.json());

  logout() {
    fetch(USER_URL + 'logout', {
      credentials: 'include'
    });
  }

  register = (user) =>
    fetch(USER_URL + 'user', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  deleteUser = (user) =>
    fetch(USER_URL + 'user', {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  updateUser = (user) =>
    fetch(USER_URL + 'user', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });

  currentUser = () =>
    fetch(USER_URL + 'currentUser', {
      credentials: 'include'
    }).then(response => response.json());

  queryUser = (username) =>
    fetch(USER_URL + 'user/exist/' + username, {
      credentials: 'include'
    }).then(response => response.status);
}

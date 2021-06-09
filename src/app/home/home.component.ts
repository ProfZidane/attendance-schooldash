import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as cryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
key: any;
iv: any;
register = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  tel: '',
  house: '',
  photo: '',
  role: '',
  post: '',
  isConnected: 'false',
  superior: [''],
  created_at: new Date().toLocaleDateString()
};
login = {
  email: '',
  password: ''
};
logout = {
  _id: ''
};
updating = {
  type: '',
  _id: '',
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  photo: '',
};
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  this.register = {
      lastName: 'zidane',
      firstName: 'Mohamed',
      email: 'zidane.mohamed@lce-ci.com',
      password: '',
      tel: '0779261619',
      house: 'Yopougon Sapeur pompier',
      photo: '',
      role: 'agent',
      post: 'Chef de petit projet',
      isConnected: 'false',
      superior: ['60bdee81a103694ab0c8fe05'],
      created_at: new Date().toLocaleDateString()
    };

    console.log(this.register);

    this.http.post('http://localhost:3000/auth/register', this.register).subscribe(
      (success) => {
        console.log(success);

      }, (err) => {
        console.log(err);

      }
    )

    /*this.login = {
      email : 'diomandedroh79@gmail.com',
      password: 'diomande-dvbj'
    };

    this.http.post('http://localhost:3000/auth/login', this.login).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );*/

    /*this.logout._id = '60bdf44b39d7dd36745a2cc5';

    this.http.post('http://localhost:3000/auth/logout', this.logout).subscribe(
      (success) => {
        console.log(success);

      }, (err) => {
        console.log(err);

      }
    );*/

    /*this.updating = {
      type: 'includes password',
      _id: '60bdf44b39d7dd36745a2cc5',
      lastName: 'Diomande',
      firstName: 'Pitus',
      email: 'diomandedroh79@gmail.com',
      password: 'new password',
      photo: ''
    };

    this.http.post('http://localhost:3000/auth/update', this.updating).subscribe(
      (success) => {
        console.log(success);
      }, (err) => {
        console.log(err);
      }
    );*/
  }

}

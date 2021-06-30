import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

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
data = {
  email : '',
  password : '',
  device : 'caisse'
};
user: any;
title = '';
countUser: any;
  constructor(private authService: AuthService, private router: Router) { 
    this.title = 'Tableau de bord';
  }

  ngOnInit(): void {

    if (localStorage.getItem('user-data') !== null) {
      this.user = localStorage.getItem('user-data')
      this.user =  JSON.parse(this.user);

      console.log(this.user);   
      
    }

    
    /*this.data = {
      email: "caissier@gmail.com",
      password: '2222',
      device: 'caisse'
    };


    this.http.post('https://accessoiresmodes.com/api/logout', { headers: this.getHeaders() }).subscribe(
      (success) => {
        console.log(success);

      }, (err) => {
        console.log(err);

      }
    )*/
  /*this.register = {
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
    )*/

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

  


  /*getHeaders() {
      const headers = new HttpHeaders({
        'Content-type' : 'application/json',
        Authorization: 'Bearer ' + this.token
      });
      return headers;
  }*/
  
  logoutFunction() {
    console.log(localStorage.getItem('user-data'));
    const _id = this.user._id;

    this.logout._id = _id;
    
    console.log(this.logout);
    
    this.authService.logout(this.logout).subscribe(
      (success) => {
        console.log(success);
        localStorage.removeItem('app-token');
        localStorage.removeItem('user-data');
        this.router.navigateByUrl('/');
      }, (err) => {
        console.log(err);
        
      }
    );
    
  }
  
}

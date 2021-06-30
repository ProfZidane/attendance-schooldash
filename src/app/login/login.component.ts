import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data = {
  email: '',
  password: ''
};
stay = false;
state = false;
error = {
  state: false,
  text: ''
};
  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post('http://localhost:3000/auth/register',
    {
      lastName:  'zidane',
    firstName: 'Mohamed',
    email: 'madazada0@gmail.com',
    password: 'azerty',
    tel: '+225 85858585',
    house: 'Yopougon sapeur pompier',
    photo: '',
    role: 'administrator',
    post: 'manager',
    isConnected: 'false',
    superior: [],
    created_at: new Date().toLocaleDateString()
    }).subscribe(
      (success) => {

        console.log(success);


      }, (err) => {

        console.log(err);


      }
    );
  }


  submit() {
    this.state = true;
    this.error.state = false;
    console.log(this.data);
    this.authService.login(this.data).subscribe(
      (success) => {
        console.log(success);
        localStorage.setItem('app-token', JSON.stringify(success.token));
        localStorage.setItem('user-data', JSON.stringify(success.stringyData));
        this.state = false;

        this.router.navigateByUrl('/home');
      }, (err) => {
        console.log(err);
        this.state = false;
        this.error.state = true;
        if (err.status === 401 && err.error.message === "Password not correct !") {
          this.error.text = 'Mot de passe incorrect !';
        } else if (err.status === 404) {
          this.error.text = err.error.message;
        } else if (err.status === 408) {
          this.error.text = err.error.message;
        }

      }
    );
  }

}

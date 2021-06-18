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
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
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

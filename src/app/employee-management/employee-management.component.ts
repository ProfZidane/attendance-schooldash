import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: any;
  users2: any;
  state = {
    createSpace: false,
    send: false,
    load: false,
    err: {
      state: false,
      text: ""
    }
  };
  userCreate = {
    lastName:  '',
  firstName: '',
  email: '',
  password: '',
  tel: '',
  house: '',
  photo: '',
  role: 'etudiant',
  grade: '',
  isConnected: 'false',  
  created_at: new Date().toLocaleDateString()
  };
  sup1 = "";
  sup2 = "";
  sup1_name = "";
  sup2_name = "";
  superiors: Object[] = [];
  userRole: any;
  constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    this.getRole();

    if (this.userRole.role === "system_administrator") {
      this.getListAllUser();
    } else {
      this.getListUser();
    }

    this.selectSup1();
  }


  getRole() {
    if (localStorage.getItem('user-data') !== null) {
      this.userRole = localStorage.getItem('user-data');
      this.userRole = JSON.parse(this.userRole);
    }
  }

  getListUser() {
    this.state.load = false;
    this.userService.getUserSystem().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
        this.state.load = true;
      }, (err) => {
        console.log(err);
        this.state.load = false;
      }
    )
  }

  getListAllUser() {
    this.state.load = false;
    this.userService.getUserAllSystem().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
        this.state.load = true;

      }, (err) => {
        console.log(err);
        this.state.load = false;

      }
    )
  }

  openCreateSpace() {
    if (this.state.createSpace === false) {
      this.state.createSpace = true;
    } else {
      this.state.createSpace = false;
    }
  }

  selectSup1() {
    
    
  }

  selectSup2(event: any) {
    console.log(event);
    
  }


  createUsers(event: Event) {
    this.state.send = true;    
    this.state.err.state = false;
    console.log(this.userCreate);

    this.userService.createUser(this.userCreate).subscribe(
      (res) => {
        console.log(res);
        this.state.send = false;
        if (this.userRole.role === "system_administrator") {
          this.getListAllUser();
        } else {
          this.getListUser();
        }
        this.userCreate = {
          lastName:  '',
        firstName: '',
        email: '',
        password: '',
        tel: '',
        house: '',
        photo: '',
        role: 'etudiant',
        grade: '',        
        isConnected: 'false',        
        created_at: new Date().toLocaleDateString()
        };
        this.state.createSpace = false;
        // this.state.send = false;
      }, (err) => {
        console.log(err);
        this.state.send = false;
        this.state.err.state = true;
        this.state.err.text = err.error.message;
      }
    );

  }

}

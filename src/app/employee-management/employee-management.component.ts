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
    load: false
  };
  userCreate = {
    lastName:  '',
  firstName: '',
  email: '',
  password: '',
  tel: '',
  house: '',
  photo: '',
  role: 'agent',
  post: '',
  typeContract: '',
  date_debut: '',
  date_fin: '',
  date_evaluation: '',
  isConnected: 'false',
  superior: [] as any,
  created_at: new Date().toLocaleDateString()
  };
  sup1 = "";
  sup2 = "";
  sup1_name = "";
  sup2_name = "";
  superiors: Object[] = [];
  constructor(private userService: UserService, private location: Location) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getListUser();
    this.getListAllUser();
    this.selectSup1();
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
    this.userService.getUserAllSystem().subscribe(
      (data) => {
        console.log(data);
        this.users2 = data;
      }, (err) => {
        console.log(err);
        
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

    if (this.sup1 !== "" || this.sup1 !== null) {
      const text = this.sup1.split('/');
      this.sup1 = text[0];
      
      const sup = {
        _id: this.sup1,
        name: text[1]
      };
      
      this.superiors.push(sup);
    }

    if (this.sup2 !== "" || this.sup2 !== null) {
      const text = this.sup2.split('/');
      this.sup2 = text[0];
      
      const sup = {
        _id: this.sup2,
        name: text[1]
      };

      this.superiors.push(sup);
    }

    this.userCreate.superior = this.superiors;
    

    console.log(this.userCreate);

    this.userService.createUser(this.userCreate).subscribe(
      (res) => {
        console.log(res);
        this.state.send = false;
        this.getListUser();
        this.userCreate = {
          lastName:  '',
        firstName: '',
        email: '',
        password: '',
        tel: '',
        house: '',
        photo: '',
        role: 'agent',
        post: '',
        typeContract: '',
        date_debut: '',
        date_fin: '',
        date_evaluation: '',
        isConnected: 'false',
        superior: [] as any,
        created_at: new Date().toLocaleDateString()
        };
      }, (err) => {
        console.log(err);
        this.state.send = false;
      }
    );

  }

}

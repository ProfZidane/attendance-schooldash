import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from '../services/entreprise.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-entreprise-member',
  templateUrl: './entreprise-member.component.html',
  styleUrls: ['./entreprise-member.component.css']
})
export class EntrepriseMemberComponent implements OnInit {
  code: any;
  dtOptions: DataTables.Settings = {};
  userCreate = {
    lastName:  '',
  firstName: '',
  email: '',
  password: '',
  tel: '',
  house: '',
  photo: '',
  role: 'administrator',
  grade: '',
  isConnected: 'false',
  codeEntreprise: '',  
  created_at: new Date().toLocaleDateString()
  };
  state = {
    createSpace: false,
    send: false,
    load: false,
    err: {
      state: false,
      text: ""
    }
  };
  users: any;
  constructor(private route: ActivatedRoute, private userService: UserService, private entrepriseService: EntrepriseService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params => {
        this.code = params.get('code');
      })
    );

    this.dtOptions = {
      pagingType: 'full_numbers'
    };

    console.log(this.code);

    this.getEntrepriseByCode();
    

  }


  getEntrepriseByCode() {
    this.state.load = false;
    this.entrepriseService.getEntrepriseByCode(this.code).subscribe(
      (data) => {
        console.log(data);
        this.users = data.data;
        this.state.load = true;
      }, (err) => {
        console.log(err);
        this.state.load = true;
      }
    );
  }


  createUsers(event: Event) {
    this.state.send = true;    
    this.state.err.state = false;
    console.log(this.userCreate);
    this.userCreate.codeEntreprise = this.code;

    this.userService.createUser(this.userCreate).subscribe(
      (res) => {
        console.log(res);
        this.state.send = false;
        
        this.userCreate = {
          lastName:  '',
        firstName: '',
        email: '',
        password: '',
        tel: '',
        house: '',
        photo: '',
        role: 'administrator',
        grade: '',        
        isConnected: 'false', 
        codeEntreprise: '',       
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

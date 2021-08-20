import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../services/entreprise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise-manage',
  templateUrl: './entreprise-manage.component.html',
  styleUrls: ['./entreprise-manage.component.css']
})
export class EntrepriseManageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  entreprise = {
    name: "",
    localisation: "",
    tel: "",
    code: "",
    created_at: new Date().toLocaleDateString()
  };
  alphabet = ['a', 'b', 'c', 'd', 'z', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  word: string = "";
  userRole: any;
  entreprises: any;
  state = {
    createSpace: false,
    send: false,
    load: false,
    err: {
      state: false,
      text: ""
    }
  };
  constructor(private entrepriseService: EntrepriseService, private router: Router) { }

  ngOnInit(): void {
    this.getRole();
    this.getEntreprise();
  }


  goToAdminRegister(code: any) {
    this.router.navigateByUrl('/home/(child:entreprise-admin/'+ code +';open=true)');
  }

  getRole() {
    if (localStorage.getItem('user-data') !== null) {
      this.userRole = localStorage.getItem('user-data');
      this.userRole = JSON.parse(this.userRole);
    }
  }

  generateCode(denomination: string, numero:string) {
    if (numero) {
      this.word = denomination + '-' + this.alphabet[Math.floor(Math.random() * this.alphabet.length)] + this.alphabet[Math.floor(Math.random() * this.alphabet.length)]  + new Date().getTime().toString();
    } else {
      this.word = denomination + '-' + this.alphabet[Math.floor(Math.random() * this.alphabet.length)] + this.alphabet[Math.floor(Math.random() * this.alphabet.length)]  + new Date().getTime().toString();
    }

    return this.word;
  }


  getEntreprise() {
    this.state.load = false;
    this.entrepriseService.getEntreprise().subscribe(
      (data) => {
        console.log(data);
        this.entreprises = data.data;
        this.state.load = true;
      }, (err) => {
        console.log(err);
        this.state.load = true;
      }
    );
  }

  createEntreprise(event: Event) {  
    this.state.send = true;  
    this.entreprise.code = this.generateCode(this.entreprise.name, this.entreprise.tel);
    console.log(this.entreprise);
    this.entrepriseService.postEntreprise(this.entreprise).subscribe(
      (success) => {
        console.log(success);
        this.state.send = false;  
        window.location.reload();
      }, (err) => {
        console.log(err);
        this.state.send = false;  

      }
    )
  }

}

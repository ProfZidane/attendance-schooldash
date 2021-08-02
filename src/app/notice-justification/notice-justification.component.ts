import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProofService } from '../services/proof.service';


@Component({
  selector: 'app-notice-justification',
  templateUrl: './notice-justification.component.html',
  styleUrls: ['./notice-justification.component.css']
})
export class NoticeJustificationComponent implements OnInit {
state = {
  motif: false,
  send: false,
  full_page: true,
  etat: '',
  err: {
    state: false,
    text: ''
  }
};
justification = {
  _id: '',
  _proof: '',
  notice: '',
  motif: ''
};
passData: any;
passData2: any;

data_proof: any;
data_user: any;
  constructor(private route: ActivatedRoute, private router: Router, private proofService: ProofService) { }

  ngOnInit(): void {
    this.passData = this.route.snapshot.paramMap.get("id");
    this.passData2 = this.route.snapshot.paramMap.get("id2");

    console.log(this.passData);
    console.log(this.passData2);
    
    this.getDetails();
  }


  getDetails() {
    this.proofService.getDetailProof(this.passData).subscribe(
      (data) => {
        console.log(data);
        this.data_proof = data.proof;
        this.data_user = data._author;
        this.state.etat = data.etat;
      }, (err) => {
        console.log(err);
        
      }
    );
  }



  showForm(etat: any) {
    if (this.state.motif === true) {
      this.state.motif = false;
      this.justification.notice = "";
      this.justification.motif = "";
    } else if (this.state.motif === false) {
      this.state.motif = true;
      this.justification.notice = etat;
    }
  }


  sendForms() {
    this.state.err.state = false;
    if (this.justification.motif !== "") {
      this.state.send = true;
      this.justification._id = this.passData2;
      this.justification._proof = this.passData;
      console.log(this.justification);

      this.proofService.setValidationProof(this.justification).subscribe(
        (success) => {
          console.log(success);
          this.state.send = false;
          this.state.full_page = false;
          this.state.err.state = false;
        }, (err) => {
          console.log(err);
          this.state.send = false;
          this.state.err.state = true;
          this.state.err.text = err.error.message;
        }
      );
    } else {
      this.state.err.state = true;
      this.state.err.text = "Veuillez obligatoirement remplir le motif";
    }
  }

}

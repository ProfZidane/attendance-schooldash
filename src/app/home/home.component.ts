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
  constructor() { }

  ngOnInit(): void {
    /*this.key = cryptoJS.SHA512('masuperkey');
    this.iv = cryptoJS.SHA256('ma_super_key_de_bloc');
    console.log(this.key);
    const a = cryptoJS.AES.encrypt('zidane', this.key,  {
      mode: cryptoJS.mode.CBC,
      iv: this.iv
    })*/
    var key256Bits = cryptoJS.PBKDF2("Secret Passphrase 1", 'salt', {
      keySize: 256 / 32
    });
    var key128Bits = cryptoJS.PBKDF2("Secret Passphrase 2", 'salt', {
      keySize: 128 / 32
    });

    console.log(key128Bits);
    console.log(key256Bits);

    const a = cryptoJS.AES.encrypt('zidane', key256Bits,  {
      mode: cryptoJS.mode.CBC,
      iv: key128Bits
    });

    console.log(a);

    const b = cryptoJS.AES.decrypt(a, key256Bits, {
      iv: key128Bits,
    });

    console.log(b);

    // this.key = cryptoJS.scryptSync('apoememfkpjojpfffefs', 'salt', 32);
    // this.iv = cryptoJS.scryptSync('pkdpsnvjqsso<qjvjqsoid', 'salt', 16);
    // console.log(this.key);
    // console.log(this.iv);

  }

}

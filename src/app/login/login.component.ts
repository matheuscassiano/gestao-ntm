import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateRequired } from '../shared/validators/required.validator';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public registerForm:any = [];

  constructor(private rota: Router) {
    this.registerForm = new FormGroup({
      'user': new FormControl (null, [ValidateRequired]),
      'pass': new FormControl (null, [ValidateRequired])
    })
  }

  ngOnInit() {
  }
  goToValidate(){
    this.rota.navigateByUrl('/validar');
  }
}

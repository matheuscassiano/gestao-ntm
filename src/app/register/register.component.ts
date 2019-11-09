import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidateRequired } from '../shared/validators/required.validator';
import { ValidateEmail } from '../shared/validators/email.validator';
import { ValidatePhone } from '../shared/validators/phonel.validator';
import { ValidateCpf } from '../shared/validators/cpf.validator';
import { UserService } from '../user.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public registerForm:any = [];

  constructor(private service: UserService) { 
    this.registerForm = new FormGroup({
      'name': new FormControl (null, [ValidateRequired]),
      'email': new FormControl (null, [ValidateEmail.valid]),
      'cpf': new FormControl (null, [ValidateCpf]),
      'competencias': new FormControl (null, [ValidateRequired]),
      'phone': new FormControl (null, [ValidatePhone.valid])
    
    })
  }

  users:any = [];

  ngOnInit() {
  /*  this.registerForm.patchValue({
      name: 'Matheus Cassiano'
    })*/

    this.service.getAllUsers().then((users) => {
      console.log(users);
      this.users = users;
    })

  }

  save(){
    const dates = this.registerForm.getRawValue();
    console.log(dates);
    this.service.saveUser(dates).then((user) =>{
    //  console.log(user);
    });
  }
}

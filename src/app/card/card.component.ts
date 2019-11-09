import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private service: UserService) { }
  
  users:any = [];

  ngOnInit() {
    this.service.getAllUsers().then((users) => {
      console.log(users);
      this.users = users;
    })
  }

  validate(cpf:any){
    this.service.validateUser(cpf).then((date) =>{
      console.log(date);
      location.reload();
      });
  }

}

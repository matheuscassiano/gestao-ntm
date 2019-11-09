import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:8000/admin/validar').toPromise();
  }

  saveUser(userDates){
    return this.http.post('http://localhost:8000/api/registro',userDates).toPromise();
  }

  validateUser(){

  }
}

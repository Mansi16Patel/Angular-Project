import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IProject{
  _id: number;
  username: string;
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:4000/api/v1/users';

  constructor(private http: HttpClient) {
  }
  adduser( username: string, email:string,password:string) {
    return this.http
      .post('http://localhost:4000/api/v1/auth/register', {
        
        username: username,
        email :email,
        password:password,
      })
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
        }),
  };
  
  getUser() {
    return this.http.get('http://localhost:4000/api/v1/users');
  }
  deleteUser(id:any){
    return this.http.delete('http://localhost:4000/api/v1/users/'+id)
  }
 
 
  
}





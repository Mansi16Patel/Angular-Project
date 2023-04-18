import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export interface IAuth {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = 'http://localhost:4000/api/v1/auth/login';

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('token');
    this._isLoggedIn$.next(!!mytoken);
  }

  login(username:string,email: string, password: string) {
    return this.http
      .post(this.url, {
        username:username,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          localStorage.setItem('token', response.token);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('token');
  }

  mytoken = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.mytoken!,
    }),
  };
}

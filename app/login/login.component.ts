import { Component } from '@angular/core';
import { NgForm,FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl<string | null>(null,[Validators.required,Validators.minLength(5)]),
  });

  

  onSubmit2(){
    this.authService
    .login(this.loginForm.value.username!,this.loginForm.value.email!, this.loginForm.value.password!)
    .subscribe({
      next: (res) => {
        console.log(res);
        //localStorage.setItem('authToken', res.token);
        this.router.navigateByUrl('dashboard');
        ///this.router.navigate(['about'])
      },
      error: (e) => {
        console.log(e);
        this.errorMessage = e.error.errors;
      },
      complete: () => {
        console.log('complete');
      },
    });
}
  }



import { Component,OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  errorMessage: any;

  constructor(private userServices:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userServices
      .adduser(this.userForm.value.username!, this.userForm.value.email!,this.userForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          console.log(e);
          this.errorMessage = e.error.errors;
        },
        complete: () => {
          console.log();
        },
      });
  }
  userForm = new FormGroup({
    
    username: new FormControl<string | null>('', Validators.required),
    email: new FormControl<string | null>('', Validators.required),
    password: new FormControl<string | null>(null,[Validators.required,Validators.minLength(5)]),
  });
}

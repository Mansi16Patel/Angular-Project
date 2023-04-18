import { Component,OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  errorMessage: any;

  constructor(private userServices:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    
    username: new FormControl<string | null>('', Validators.required),
    email: new FormControl<string | null>('', Validators.required),
    password: new FormControl<string | null>('', Validators.required),
  });
  onSubmit() {
    this.userServices
      .adduser(this.userForm.value.username!, this.userForm.value.email!,this.userForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/user');
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'register', component: RegistrationformComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component ,OnInit} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService, IProject} from "src/app/services/user.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
//localhost:4000/api/v1/users
export class UsersComponent implements OnInit {
  users: IProject[] = [];
  searchValue="";
  
  constructor(private userService:UserService) { }
   /*  handleDelete (id: string)  {
      this.userlist= this.userlist.filter((u) => u.id !== id);
    }; */
    ngOnInit(): void {
      this.userService.getUser().subscribe((data:any) => {
        console.log(data)
        this.users = data;
      });
    }
  delete(datas:any){
    this.userService.deleteUser(datas._id).subscribe(data=>
      this.users=this.users.filter((u:any)=>u!==datas)
      )
  }
}

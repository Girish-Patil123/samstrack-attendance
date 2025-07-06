import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  userList: any[] = [];
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((res) => {
      this.userList = res;
      console.log(res);
    });
  }

 deleteUser(username: string) {
  Swal.fire({
    title: 'Are you sure?',
    text: `You are about to delete user "${username}"`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.userService.deleteUser(username).subscribe(res => {
        this.getAllUser();
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: res,
          timer: 2000,
          showConfirmButton: false
        });
      });
    }
  });
}
}

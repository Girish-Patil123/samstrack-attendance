import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let username = this.activatedRoute.snapshot.paramMap.get('username')
    this.getUserByUsername(username);
  }

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  }

  getUserByUsername(username: any) {
    this.userService.getUserByUsername(username).subscribe((res) => {
      this.user = res;
    })

  }

  updateUser() {
  this.userService.updateUser(this.user).subscribe((res) => {
    Swal.fire({
      title: 'Success!',
      text: 'User updated successfully.',
      icon: 'success',
      confirmButtonColor: '#ff914d',
      confirmButtonText: 'OK',
      backdrop: true
    });
  }, (error) => {
    Swal.fire({
      title: 'Error!',
      text: 'Failed to update user.',
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Close'
    });
  });
}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // ✅ import Router
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router // ✅ inject Router
  ) {}

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  };

  ngOnInit(): void {
    let username = this.activatedRoute.snapshot.paramMap.get('username');
    this.getUserByUsername(username);
  }

  getUserByUsername(username: any) {
    this.userService.getUserByUsername(username).subscribe((res) => {
      this.user = res;
    });
  }

  updateUser() {
    console.log('Updating user with data:', this.user);
    this.userService.updateUser(this.user).subscribe(
      (res) => {
        Swal.fire({
          title: 'Success!',
          text: 'User updated successfully.',
          icon: 'success',
          confirmButtonColor: '#ff914d',
          confirmButtonText: 'OK',
          backdrop: true,
        }).then(() => {
          this.router.navigate(['/all-user']); // ✅ navigate after success alert
        });
      },
      (error) => {
        console.error('Update error:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update user.',
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Close',
        });
      }
    );
  }
}

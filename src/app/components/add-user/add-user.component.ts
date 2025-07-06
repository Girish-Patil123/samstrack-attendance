import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  constructor(private userService: UserService) { }

  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    role: ''
  };

  addUser() {
    this.userService.registerUser(this.user).subscribe((res) => {

      // SweetAlert2 Popup
      Swal.fire({
        title: 'User Added Successfully!',
        text: 'The new user has been registered.',
        icon: 'success',
        confirmButtonColor: '#2a3d66',
        background: '#fff9f3',
        color: '#2a3d66'
      });

      // Reset form fields
      this.user = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        role: ''
      };

    }, error => {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to register user.',
        icon: 'error',
        confirmButtonColor: '#d33'
      });
    });
  }

}


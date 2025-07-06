import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) { }

  user = {
    username: '',
    password: '',
  };

 login() {
  this.userService.login(this.user).subscribe({
    next: (res) => {
      console.log(res);

      if (res != null) {
        localStorage.setItem('user', res.username);
        localStorage.setItem('role', res.role);

        if (res.role === 'admin') {
          this.router.navigateByUrl('admin-dashboard');
        } else {
          this.router.navigateByUrl('faculty-dashboard');
        }
      } else {
        // This case may not be reached if the server throws an error
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid credentials.',
          confirmButtonColor: '#d33'
        });
      }
    },
    error: (err) => {
      console.error('Login failed:', err);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid credentials! Please check your username and password.',
        confirmButtonColor: '#d33'
      });
    }
  });
}

}

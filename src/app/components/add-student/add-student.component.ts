import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentService: StudentService) { }

  student = {
    name: '',
    email: ''
  };

addStudent() {
  this.studentService.addStudent(this.student).subscribe((res) => {
    if (res) {
      this.student.email = '';
      this.student.name = '';
      
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Student added successfully',
        showConfirmButton: false,
        timer: 2000
      });.then(() => {
          this.router.navigate(['/all-student']); // ✅ redirect after alert
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to add student',
      });
    }
  });

  }
}

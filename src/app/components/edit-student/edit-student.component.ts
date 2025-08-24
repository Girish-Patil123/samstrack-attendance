import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute) { }

  student = {
    id: 0,
    name: '',
    email: ''
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getstudentById(id);
  }

  getstudentById(id: any) {
    this.studentService.getStudentById(id).subscribe((res) => {
      this.student = res;
    });
  }


 updateStudent() {
  this.studentService.updateStudent(this.student).subscribe((res) => {
    if (res) {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Student updated successfully',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error occurred while updating student',
      });
    }
  });
  }

}

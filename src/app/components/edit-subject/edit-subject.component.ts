import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  subject: any = {};

  constructor(
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('subjectid');
    this.getSubject(id);
  }

  getSubject(id: any) {
    this.subjectService.getSubject(id).subscribe((res) => {
      this.subject = res;
    });
  }

  updateSubject() {
  this.subjectService.updateSubject(this.subject).subscribe({
    next: (res) => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Subject updated successfully!',
        confirmButtonColor: '#3085d6'
      }).then(() => {
        this.router.navigate(['/all-subject']); // Navigate after alert is closed
      });
    },
    error: (err) => {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: 'An error occurred while updating the subject.',
        confirmButtonColor: '#d33'
      });
    }
  });
}
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 private baseUrl = `${environment.baseUrl}/student`;

  constructor(private http: HttpClient) { }

  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-student`, student);
  }

  allStudent(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-students`);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-student-by-id/${id}`);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-student`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });
  }

}

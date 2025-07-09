import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private baseUrl = `${environment.baseUrl}/subject`;

  constructor(private http: HttpClient) { }

  addSubject(subject: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-subject`, subject);
  }

  allSubjects(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-subjects`);
  }

  getSubject(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-subject-by-id/${id}`);
  }
  updateSubject(subject: any): Observable<any> {
  return this.http.put(`${this.baseUrl}/update-subject`, subject);
}

}

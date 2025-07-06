import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private baseUrl = `${environment.baseUrl}/attendance`;

  constructor(private http: HttpClient) { }

  filteredAttendance(user: string, subjectId: number, date: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-attendance/${user}/${subjectId}/${date}`);
  }

  allAttendance(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-attendance-records`);
  }

  saveAttendance(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/take-attendance`, data);
  }
}

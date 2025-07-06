import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private baseUrl = `${environment.baseUrl}/user`;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login-user`, user);
  }
   isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register-user`, user, { responseType: 'text' });
  }

  getAllUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-user`);
  }

  getAllAdmins(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-admin`);
  }

  getAllFaculty(): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-all-faculty`);
  }

  deleteUser(username: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-user-by-username?username=${username}`, { responseType: 'text' });
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get-user-by-username/${username}`);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-user`, user);
  }

}

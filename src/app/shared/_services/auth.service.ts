import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';


const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    })
  };
  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    return this.http.get(AUTH_API + 'all', this.httpOptions);
  }

  findById(id): Observable<any> {
    return this.http.get(`${AUTH_API + 'find'}/${id}`, this.httpOptions);
  }
  delete(id) {
    return this.http.delete(`${AUTH_API + 'delete'}/${id}`, this.httpOptions);

  }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email,
      password
    }, this.httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role
    }, this.httpOptions);
  }
  update(id, user): Observable<any> {
    return this.http.put(`${AUTH_API + 'update'}/${id}`, {
      username: user.username,
      email: user.email,
      role: user.role
    }, this.httpOptions);
  }
}

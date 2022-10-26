import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/chauffeur/';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'

})
export class ChauffeurService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`
    })
  };

  constructor(private http: HttpClient) {
  }

  getall(): Observable<any> {
    return this.http.get(API_URL + 'all', this.httpOptions);
  }

  findById(id): Observable<any> {
    return this.http.get(`${API_URL + 'find'}/${id}`, this.httpOptions);
  }

  add(chauffeur): Observable<any> {
    console.log(chauffeur);
    return this.http.post(API_URL + 'add', {
      firstname: chauffeur.firstname,
      lastname : chauffeur.lastname,
      cin : chauffeur.cin,
      datenaissance : chauffeur.datenaissance,
      idvehicule: chauffeur.idvehicule,
    }, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(`${API_URL + 'delete'}/${id}`, this.httpOptions);

  }

  update(id, chauffeur): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      firstname: chauffeur.firstname,
      lastname : chauffeur.lastname,
      cin : chauffeur.cin,
      datenaissance : chauffeur.datenaissance,
      idvehicule: chauffeur.idvehicule
    }, this.httpOptions);
  }

 }

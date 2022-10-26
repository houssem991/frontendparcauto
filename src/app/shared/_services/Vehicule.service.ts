import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8080/api/vehicule/';

const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'

})
export class VehiculeService {
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

  add(vehicule): Observable<any> {
    console.log(vehicule);
    return this.http.post(API_URL + 'add', {
      immat: vehicule.immat,
      datedereparation : vehicule.datedereparation,
      nameassurance: vehicule.nameassurance,
      echeance: vehicule.echeance,
      taxes : vehicule.taxes,
      etatderep: vehicule.etatderep,
      vignette: vehicule.vignette,
      montantderep: vehicule.montantderep,
      natderep: vehicule.natderep,
    }, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(`${API_URL + 'delete'}/${id}`, this.httpOptions);

  }

  update(id, vehicule): Observable<any> {
    return this.http.put(`${API_URL + 'update'}/${id}`, {
      immat: vehicule.immat,
      datedereparation : vehicule.datedereparation,
      nameassurance: vehicule.nameassurance,
      echeance: vehicule.echeance,
      taxes : vehicule.taxes,
      etatderep: vehicule.etatderep,
      vignette: vehicule.vignette,
      montantderep: vehicule.montantderep,
      natderep: vehicule.natderep,
    }, this.httpOptions);
  }

 }

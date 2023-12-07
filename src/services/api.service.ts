// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from './profile.mode';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ;  // Reemplaza con la dirección de tu API

  constructor(private http: HttpClient) { }

  getProfileData(): Observable<any> {
    return this.http.get('http://localhost:5031/api/Profile');
  }

  // Método para actualizar el perfil
  updateProfile(profile: Profile): Observable<Profile> {
    const url = `${'http://localhost:5031/api/Profile'}`; // Reemplaza con tu ruta real

    return this.http.put<Profile>(url, profile);
  }
}

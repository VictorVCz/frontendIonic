// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  profileData: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProfileData().subscribe(
      (data) => {
        this.profileData = data;
      },
      (error) => {
        console.error('Error al obtener datos del perfil:', error);
      }
    );
  }

  
}

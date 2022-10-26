import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/gestion-utilisateur', title: 'Gestion Utilisateur',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/gestion-vehicule', title: 'Getsion Vehicule',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/gestion-chauffeur', title: 'Gestion Chauffeur',  icon:'ni-planet text-blue', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  username: any;
  constructor(private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUser().username;
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

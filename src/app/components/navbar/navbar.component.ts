import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  username: any;
  user: any ;


  constructor(location: Location, private tokenStorage: TokenStorageService , private element: ElementRef, private router: Router)  {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUser().username;
      this.user = this.tokenStorage.getUser();
    }

  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice( 1 );
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }

  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}

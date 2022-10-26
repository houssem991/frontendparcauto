import { Component, OnInit } from '@angular/core';
import {VehiculeService} from '../../shared/_services/Vehicule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';

@Component({
  selector: 'app-show-chauffeur',
  templateUrl: './show-chauffeur.component.html',
  styleUrls: ['./show-chauffeur.component.scss']
})
export class ShowChauffeurComponent implements OnInit {

  idchauffeur: any;
  chauffeur: any;
  user: any;

  constructor (private vehiculeService: VehiculeService, private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private chauffeurService: ChauffeurService) {
    this.idchauffeur = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.chauffeurService.findById(this.idchauffeur).subscribe(data => {
      this.chauffeur = data;
      console.log(this.chauffeur);
    });

  }
  delete($id) {
    this.chauffeur.delete($id).subscribe(data => {
      window.location.reload();
    });
  }



  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }




}

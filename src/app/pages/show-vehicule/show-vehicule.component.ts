import { Component, OnInit } from '@angular/core';
import {VehiculeService} from '../../shared/_services/Vehicule.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';

@Component({
  selector: 'app-show-vehicule',
  templateUrl: './show-vehicule.component.html',
  styleUrls: ['./show-vehicule.component.scss']
})
export class ShowVehiculeComponent implements OnInit {


  idvehicule: any;
  chauffeur: any;
  vehicule: any;

  user: any;
  settings = {
    columns: {
      id: {
        title: 'Code chauffeurs'
      },

      firstname: {
        title: 'Nom chauffeurs '
      },
      lastname: {
        title: 'Prenom chauffeurs '
      },
      cin: {
        title: 'Num CIN '
      },
      datenaissance: {
        title: 'Date de Naissance'
      }

    },
    attr: {
      class: 'table table-responsive '
    },
    actions: {
      columnTitle: '',
      custom: [],
      add: false,
      delete: false,
      edit: false,
      show: false,

      position: 'right'
    }
  };
  userr: any;

  constructor (private vehiculeService: VehiculeService, private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private chauffeurService: ChauffeurService) {
    this.idvehicule = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.vehiculeService.findById(this.idvehicule).subscribe(data => {
      this.vehicule = data;
      this.chauffeur = this.vehicule.chauffeurs;
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
      this.userr = this.tokenStorage.getUser();
    }
  }


}

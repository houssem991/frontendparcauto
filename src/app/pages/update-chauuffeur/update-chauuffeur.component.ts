import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';

@Component({
  selector: 'app-update-chauuffeur',
  templateUrl: './update-chauuffeur.component.html',
  styleUrls: ['./update-chauuffeur.component.scss']
})
export class UpdateChauuffeurComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  concour: any;
  errorMessage = '';
  idChauffeur = '';
  user: any;
vehicules: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private chauffeurService: ChauffeurService , private vehiculeService: VehiculeService) {
    this.idChauffeur = this.route['params']['value']['id'];
    this.getById();
    this.getallVehicule();
  }

  getById() {
    this.chauffeurService.findById(this.idChauffeur).subscribe(data => {
      this.concour = data;
      this.form = data;
      console.log(this.form);
    });
  }
  getallVehicule(): void {
    this.vehiculeService.getall().subscribe(data => {
      this.vehicules = data;
    });
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
      this.iduser = this.tokenStorage.getUser().id;
    }
  }

  onSubmit(): void {
    this.form.iduser = this.iduser;
    this.chauffeurService.update(this.idChauffeur , this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-chauffeur']);
      },
      err => {
        this.router.navigate(['/gestion-chauffeur']);

      }
    );
  }


}

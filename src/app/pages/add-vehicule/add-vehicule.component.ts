import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.scss']
})
export class AddVehiculeComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  chauffeurs: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private vehiculeService: VehiculeService,private chauffeurService: ChauffeurService) {
  }
getallChauffeur(): void {
    this.chauffeurService.getall().subscribe(data => {
      this.chauffeurs = data;
    });
}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    }
  }
  onSubmit(): void {
    this.vehiculeService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-vehicule']);
      },
      err => {
        this.router.navigate(['/gestion-vehicule']);

      }
    );
  }
}




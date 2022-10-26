import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {ChauffeurService} from '../../shared/_services/chauffeur.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';

@Component({
  selector: 'app-add-chauffeur',
  templateUrl: './add-chauffeur.component.html',
  styleUrls: ['./add-chauffeur.component.scss']
})
export class AddChauffeurComponent implements OnInit {




  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  errorMessage = '';
  error: any = {isError: false, errorMessage: ''};
  user: any;
  vehicules: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private chauffeurService: ChauffeurService, private vehiculeService: VehiculeService ) {
  this.getallVehicule();
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.iduser = this.tokenStorage.getUser().id;
      this.user = this.tokenStorage.getUser();
    }
  }
  getallVehicule():void {
    this.vehiculeService.getall().subscribe(data => {
      this.vehicules = data;
    });
  }
  onSubmit(): void {
    this.form.iduser = this.iduser;
    this.chauffeurService.add(this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-chauffeur']);
      },
      err => {
        this.router.navigate(['/gestion-chauffeur']);

      }
    );
  }
}

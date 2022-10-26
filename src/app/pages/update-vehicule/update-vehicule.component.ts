import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.scss']
})
export class UpdateVehiculeComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  iduser: any;
  errorMessage = '';
  idvehicule = '';
  user: any;


  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService,  private vehiculeService: VehiculeService) {
    this.idvehicule = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.vehiculeService.findById(this.idvehicule).subscribe(data => {
      this.form = data;
      console.log(this.form);
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
    this.vehiculeService.update(this.idvehicule , this.form).subscribe(
      data => {
        this.router.navigate(['/gestion-vehicule']);
      },
      err => {
        this.router.navigate(['/gestion-vehicule']);

      }
    );
  }


}

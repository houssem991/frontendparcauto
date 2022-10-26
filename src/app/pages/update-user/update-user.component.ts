import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../shared/_services/token-storage.service';
import {VehiculeService} from '../../shared/_services/Vehicule.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  iduser: any;

  constructor(private router: Router, private  route: ActivatedRoute, private tokenStorage: TokenStorageService,  private authService: AuthService) {
    this.iduser = this.route['params']['value']['id'];
    this.getById();
  }

  getById() {
    this.authService.findById(this.iduser).subscribe(data => {
      this.form = data;
      if (data.roles[0].name === 'ROLE_USER') {
        this.form.role = 'user';

      } else { this.form.role = 'admin'; }
      console.log(data.roles[0].name);
    });
  }

  ngOnInit(): void {
    }

  onSubmit(): void {
    this.form.role = [this.form.role];


    this.authService.update(this.iduser, this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}

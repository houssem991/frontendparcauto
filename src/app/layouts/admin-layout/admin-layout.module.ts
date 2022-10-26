import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {GestionChauffeurComponent} from '../../pages/gestion-chauffeur/gestion-chauffeur.component';
import {GestionVehiculeComponent} from '../../pages/gestion-vehicule/gestion-vehicule.component';
import {GestionUsersComponent} from '../../pages/gestion-users/gestion-users.component';
import {AddChauffeurComponent} from '../../pages/add-chauffeur/add-chauffeur.component';
import {AddVehiculeComponent} from '../../pages/add-vehicule/add-vehicule.component';
import {AddUserComponent} from '../../pages/add-user/add-user.component';
import {UpdateUserComponent} from '../../pages/update-user/update-user.component';
import {UpdateChauuffeurComponent} from '../../pages/update-chauuffeur/update-chauuffeur.component';
import {UpdateVehiculeComponent} from '../../pages/update-vehicule/update-vehicule.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {RegisterComponent} from '../../pages/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SmartTableModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    GestionChauffeurComponent,
    GestionVehiculeComponent,
    GestionUsersComponent,
    AddChauffeurComponent,
    AddVehiculeComponent,
    AddUserComponent,
    UpdateUserComponent,
    UpdateChauuffeurComponent,
    UpdateVehiculeComponent,
    RegisterComponent,
  ]
})

export class AdminLayoutModule {}

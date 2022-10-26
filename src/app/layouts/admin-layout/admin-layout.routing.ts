import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import {GestionChauffeurComponent} from '../../pages/gestion-chauffeur/gestion-chauffeur.component';
import {GestionVehiculeComponent} from '../../pages/gestion-vehicule/gestion-vehicule.component';
import {AddChauffeurComponent} from '../../pages/add-chauffeur/add-chauffeur.component';
import {ShowChauffeurComponent} from '../../pages/show-chauffeur/show-chauffeur.component';
import {UpdateChauuffeurComponent} from '../../pages/update-chauuffeur/update-chauuffeur.component';
import {AddVehiculeComponent} from '../../pages/add-vehicule/add-vehicule.component';
import {ShowVehiculeComponent} from '../../pages/show-vehicule/show-vehicule.component';
import {UpdateVehiculeComponent} from '../../pages/update-vehicule/update-vehicule.component';
import {RegisterComponent} from '../../pages/register/register.component';
import {UpdateUserComponent} from '../../pages/update-user/update-user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'gestion-utilisateur',      component: DashboardComponent },
    { path: 'gestion-chauffeur',   component: GestionChauffeurComponent },
    { path: 'gestion-vehicule',   component: GestionVehiculeComponent },
    { path: 'addchauffeur',   component: AddChauffeurComponent },
    { path: 'addvehicule',   component: AddVehiculeComponent },
    { path: 'showchauffeur/:id',   component: ShowChauffeurComponent},
    { path: 'show-vehicule/:id',   component: ShowVehiculeComponent},
    { path: 'updatechauffeur/:id',   component: UpdateChauuffeurComponent},
    { path: 'update-vehicule/:id',   component: UpdateVehiculeComponent},
    { path: 'register',   component: RegisterComponent},
    { path: 'updateUser/:id',   component: UpdateUserComponent},

];

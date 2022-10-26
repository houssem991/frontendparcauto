import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {AuthService} from './shared/_services/auth.service';
import {authInterceptorProviders} from './shared/_helpers/auth.interceptor';
import {AuthGuard} from './shared/_helpers/auth/auth-guard.service';
import { ShowChauffeurComponent } from './pages/show-chauffeur/show-chauffeur.component';
import { ShowVehiculeComponent } from './pages/show-vehicule/show-vehicule.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';



@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        Ng2SmartTableModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ShowChauffeurComponent,
    ShowVehiculeComponent,
  ],
  providers: [
    AuthService,
    authInterceptorProviders,
  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

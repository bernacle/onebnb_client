import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { ResetPasswordComponent } from './users/reset-password/reset-password.component';
import { UpdatePasswordComponent } from './users/update-password/update-password.component';
import { ResultsComponent } from './results/results.component';
import { Angular2TokenService } from 'angular2-token';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { TalksListComponent } from './talks/talks-list/talks-list.component';
import { TalksChatComponent } from './talks/talks-chat/talks-chat.component';
import { PropertyTripsComponent } from './property/property-trips/property-trips.component'
import { ReservationDetailsComponent } from './reservation/reservation-details/reservation-details.component';
 
 
// Cria nossas Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'login', component: LoginComponent },
  { path: 'user/edit', component: UserEditComponent, canActivate: [Angular2TokenService]},
  { path: 'results', component: ResultsComponent},
  { path: 'property/:id', component: PropertyDetailsComponent},
  { path: 'talks', component: TalksListComponent },
  { path: 'talks/chat/:id', component: TalksChatComponent },
  { path: 'trips', component: PropertyTripsComponent},
  { path: 'property/:id/reservation', component: ReservationDetailsComponent }

];
 
// Exporte a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
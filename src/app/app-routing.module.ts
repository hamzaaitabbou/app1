import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UsersComponent} from './users/users.component';
import {DetailsUserComponent} from './users/details-user/details-user.component';
import {AuthService} from './service/auth.service';
import {AuthComponent} from './auth/auth.component';


const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'user', canActivate : [AuthService], component : UsersComponent},
  {path : 'user/:id', canActivate : [AuthService], component : DetailsUserComponent},
  {path : 'auth', component : AuthComponent},
  {path : 'not-found', component : NotFoundComponent},
  {path : '**', redirectTo : 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

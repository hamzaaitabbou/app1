import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {UserService} from './service/user.service';
import { AfficherUserComponent } from './users/afficher-user/afficher-user.component';
import { DetailsUserComponent } from './users/details-user/details-user.component';
import { AuthComponent } from './auth/auth.component';
import {AuthService} from "./service/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    NotFoundComponent,
    AfficherUserComponent,
    DetailsUserComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginComponent,
    RegestrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { StartComponent } from './start/start.component';
import { HauptbildschirmComponent } from './hauptbildschirm/hauptbildschirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegestrationComponent,
    StartComponent,
    HauptbildschirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

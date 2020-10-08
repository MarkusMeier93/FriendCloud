import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegestrationComponent} from './regestration/regestration.component';
import {LoginComponent} from './login/login.component';
import {StartComponent} from './start/start.component';
const routes: Routes = [
  {path:'', redirectTo:'start-component',pathMatch:'full'},
  {path:'start-component', component: StartComponent },
  {path:'regestration-component', component: RegestrationComponent },
  {path:'login-component', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

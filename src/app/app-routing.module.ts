import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegestrationComponent} from './regestration/regestration.component';
import {LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:'', redirectTo:'regestration-component',pathMatch:'full'},
  {path:'regestration-component', component: RegestrationComponent },
  {path:'forum-component', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

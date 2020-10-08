import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  tryToLogin(username:string,password:string){
    if(username=="Markus" && password=="test123"){
      this.router.navigate(['/login-component']);
    }

  }
  changeToStartSeite(){
    this.router.navigate(['/start-component']);
  }
}

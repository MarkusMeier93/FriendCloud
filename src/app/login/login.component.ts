import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() x:string;
  @Output() click = new EventEmitter();
  public static test:string="Hallo";

  
  constructor(private router:Router) { }
  ngOnInit(): void {
    
  }
 
  backToStart(){
    this.router.navigate(['/start-component']);
  }
  tryToLogin(username:string,password:string){
    if(username=="Markus" && password=="test123"){
      this.x=username;
    document.getElementById('navbarNavAltMarkup').style.display = "none"; 
     this.router.navigate(['/hauptbildschirm-component'],{ queryParams: { user:username}});
    }

  }
}

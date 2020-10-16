import { Component, OnInit ,Input, HostBinding} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-hauptbildschirm',
  templateUrl: './hauptbildschirm.component.html',
  styleUrls: ['./hauptbildschirm.component.css']
})
export class HauptbildschirmComponent implements OnInit {
   
  name:string;
  @Input()login:LoginComponent;
  @Input()app:AppComponent;



  constructor(private router:ActivatedRoute) {
    console.log(LoginComponent.test);
  }

  ngOnInit(): void {
    
    this.router.queryParams.subscribe(params =>{
      document.getElementById('userLabel').innerHTML=params['user'];
      
    
        });
  }
 
  changeLabelName(lbl:string, val:string) {
   document.getElementById(lbl).innerHTML = val;
   
  }  
}
 
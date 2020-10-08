import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hauptbildschirm',
  templateUrl: './hauptbildschirm.component.html',
  styleUrls: ['./hauptbildschirm.component.css']
})
export class HauptbildschirmComponent implements OnInit {
  tbName:string;
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params =>{
      this.tbName=params['user'];
        });
  }

  changeLabelName(lbl:string, val:string) {
    document.getElementById(lbl).innerHTML = val;
  }  
}

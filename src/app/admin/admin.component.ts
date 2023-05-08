import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public showList=false
  constructor(private router: Router) {}
  showHideSidenav:boolean=true;

  ngOnInit(): void {
      
  }

  onshowSidenavChange(showHideSidenav:boolean){
    this.showHideSidenav=showHideSidenav;
  }
}

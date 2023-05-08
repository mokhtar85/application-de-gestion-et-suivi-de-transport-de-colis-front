import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  showHideSidenav:boolean=true;
constructor(){};
ngOnInit(): void {
    
}
onshowSidenavChange(showHideSidenav:boolean){
  this.showHideSidenav=showHideSidenav;
}
}

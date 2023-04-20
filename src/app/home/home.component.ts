import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //interpolation : permet de lier des données entre une vue (HTML) et un composant (TypeScript)
  testinterpo="test";
  testcolor="background-color: blue;"
  testtwb="hello its about two way binding"
  constructor(){

  }
  ngOnInit(): void {
      
  }

}

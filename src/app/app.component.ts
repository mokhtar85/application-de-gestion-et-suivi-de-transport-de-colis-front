import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'formationAngularMars';
  constructor(private router: Router) {}

  isHomePage() {
    return this.router.url === '/' || this.router.url === '/signin' || this.router.url === '/signup';
  }
  
 
}

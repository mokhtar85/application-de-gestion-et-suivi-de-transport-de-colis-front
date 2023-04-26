import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() label!: string;
  @Input() total!: string;
  @Input() percentage!: string;
 
  
  Highcharts=Highcharts;
  chartOptions!: {};
  numberOfClients: number = 0;
  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: null,
          align: 'left'
      },
      subtitle: {
          text:null,
          align: 'left'
      },
    
      tooltip: {
          split: true,
         outside:true,
      },
      legend:{
        enabled:false,
      },
      credits:{
        enabled:false,
      },
      exporting:{
        enabled:false,
      },
      series: [{
        data: [this.numberOfClients]
      }]
  };

  HC_exporting(Highcharts);
  setTimeout(()=> {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  
}

}

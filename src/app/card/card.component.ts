import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
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
  constructor(){

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
        data: [71, 78, 39, 66]
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

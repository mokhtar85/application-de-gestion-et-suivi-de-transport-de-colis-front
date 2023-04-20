import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions!: {};
  Highcharts=Highcharts;
constructor(){

}
ngOnInit(): void {
    this.chartOptions= {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Random Data',
          align: 'left'
      },
      subtitle: {
          text: 'Demo',
          align: 'left'
      },
    
      tooltip: {
          split: true,
         valueSuffix: 'millions',
      },
      credits:{
        enabled:false,
      },
      exporting:{
        enabled:true,
      },
      series: [{
          name: 'Ocean transport',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
      }, {
          name: 'Households',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
      }, {
          name: 'Agriculture and hunting',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
      }, {
          name: 'Air transport',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]
  
      }, {
          name: 'Construction',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
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

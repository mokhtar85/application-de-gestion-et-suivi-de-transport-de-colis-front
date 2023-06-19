import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{
  chartOptions!: {};
  Highcharts = Highcharts 
  constructor(){}
  ngOnInit(): void {
   this.chartOptions= {
      chart: {
          type: 'column'
      },
      title: {
          align: 'left',
          text: 'Pourcentage des colis selon l état'
      },
      subtitle: {
          align: 'left',
          text: 'cliquer sur les colonne pour voir les détails</a>'
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          type: 'category'
      },
      yAxis: {
          title: {
              text: 'pourcentage total des colis selon leurs état'
          }
  
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  format: '{point.y:.1f}%'
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
          pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },
  
      series: [
          {
              name: 'Etat',
              colorByPoint: true,
              data: [
                  {
                      name: 'en livraison',
                      y: 63.06,
                      drilldown: 'en livraison'
                  },
                  {
                      name: 'livré',
                      y: 19.84,
                      drilldown: 'livré'
                  },
                  {
                      name: 'en attente',
                      y: 4.18,
                      drilldown: 'en attente'
                  }
              ]
          }
      ],
      drilldown: {
          breadcrumbs: {
              position: {
                  align: 'right'
              }
          },
          series: [
              {
                  name: 'en livraison',
                  id: 'en livraison',
                  data: [
                      [
                          'v65.0',
                          0.1
                      ],
                      [
                          'v64.0',
                          1.3
                      ],
                      [
                          'v63.0',
                          53.02
                      ],
                      [
                          'v62.0',
                          1.4
                      ],
                      [
                          'v61.0',
                          0.88
                      ],
                      [
                          'v60.0',
                          0.56
                      ],
                      [
                          'v59.0',
                          0.45
                      ],
                      [
                          'v58.0',
                          0.49
                      ],
                      [
                          'v57.0',
                          0.32
                      ],
                      [
                          'v56.0',
                          0.29
                      ],
                      [
                          'v55.0',
                          0.79
                      ],
                      [
                          'v54.0',
                          0.18
                      ],
                      [
                          'v51.0',
                          0.13
                      ],
                      [
                          'v49.0',
                          2.16
                      ],
                      [
                          'v48.0',
                          0.13
                      ],
                      [
                          'v47.0',
                          0.11
                      ],
                      [
                          'v43.0',
                          0.17
                      ],
                      [
                          'v29.0',
                          0.26
                      ]
                  ]
              },
              {
                  name: 'livré',
                  id: 'livré',
                  data: [
                      [
                          'v58.0',
                          1.02
                      ],
                      [
                          'v57.0',
                          7.36
                      ],
                      [
                          'v56.0',
                          0.35
                      ],
                      [
                          'v55.0',
                          0.11
                      ],
                      [
                          'v54.0',
                          0.1
                      ],
                      [
                          'v52.0',
                          0.95
                      ],
                      [
                          'v51.0',
                          0.15
                      ],
                      [
                          'v50.0',
                          0.1
                      ],
                      [
                          'v48.0',
                          0.31
                      ],
                      [
                          'v47.0',
                          0.12
                      ]
                  ]
              },
              {
                  name: 'en attente',
                  id: 'en attente',
                  data: [
                      [
                          'v11.0',
                          6.2
                      ],
                      [
                          'v10.0',
                          0.29
                      ],
                      [
                          'v9.0',
                          0.27
                      ],
                      [
                          'v8.0',
                          0.47
                      ]
                  ]
              }
          ]
      }
    
  }
    

    
  }

}

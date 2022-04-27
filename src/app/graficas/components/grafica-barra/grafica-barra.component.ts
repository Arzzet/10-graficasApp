import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent  {

  @Input() horizontal: boolean = false;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };


  @Input() barChartType: ChartType = 'bar';


  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' },
      // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C' }
    ]
  };

  constructor() { 
    
  }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions = {
        indexAxis: 'y'
      }
    }
  }
  // Version mejorada del randomize con un forEach para cada dataset
  public randomize(): void {

    this.barChartData.datasets.forEach((dataset) => {
    // Only Change 3 values
      dataset.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    });
      

    this.chart?.update();
  }

  
}

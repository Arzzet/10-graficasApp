import { Component, OnInit } from '@angular/core';
import { Color, ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public colors: Color[] = [      
    '#3366CC',
    '#DC3912',
    '#FF9900',
    '#109618',
    '#990099'
  ];
  
  // Doughnut
  public doughnutChartLabels: string[] = [ 
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
  ];
  public doughnutChartData: ChartData<'doughnut'> =
    {
      labels: this.doughnutChartLabels,
      datasets: [
        { 
          data: []
        },
        
      ]
    }
  
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graficasservice: GraficasService) { }

  ngOnInit(): void {
    // this.graficasservice.getUsuariosRedesSociales()
    //   .subscribe(data => {
    //     console.log(data);
    //     const labels = Object.keys (data);
    //     const values = Object.values (data);

        
    //     this.doughnutChartData = {
    //       labels: labels,
    //       datasets: [{data: values, backgroundColor: this.colors}]
    //     };

        
    //   });

    this.graficasservice.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartData = {
          labels,
          datasets: [{data: values, backgroundColor: this.colors}]
        };
      });
  }

}

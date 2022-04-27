import { Component } from '@angular/core';
import { ChartData, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent {

  // proveedoresData: ChartDataSets[] = [
  //   { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
  //   { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  // ];

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  public proveedoresData: ChartData<'bar'> = { 
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
    ]
  };

  
  // productoData: ChartDataSets[] = [
  //   { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },
  // ];

  public productoData: ChartData<'bar'> = {
    labels: this.proveedoresLabels,
    datasets: [
      { data: [ 200, 300, 400, 300, 100 ], label: 'Carros', backgroundColor: 'blue' },
    ]
  };

  productosOpciones: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'y', //Esto hace que sea horizontal el gráfico
  }

  lineOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    }
  };
}

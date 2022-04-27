import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasservice: GraficasService) { }

  ngOnInit(): void {
    this.graficasservice.getUsuariosRedesSociales()
      .subscribe(resp => {
        console.log(resp);
      });
  }

}

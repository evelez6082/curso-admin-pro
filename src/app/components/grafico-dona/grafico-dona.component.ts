import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {
      
  // Doughnut
  @Input('leyenda') leyenda;
  @Input('labels') doughnutChartLabels:string[] = [];
  @Input('data') doughnutChartData:number[] = [];
  @Input('type') doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}

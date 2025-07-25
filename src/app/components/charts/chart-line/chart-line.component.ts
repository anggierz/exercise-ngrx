import { Component, OnInit } from '@angular/core';
import {
  Chart,
  registerables
} from 'chart.js';

@Component({
  selector: 'app-chart-line',
  standalone: true,
  imports: [],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.scss'
})
export class ChartLineComponent implements OnInit {

  public chart: any;

  createChart(){
    this.chart = new Chart("line-chart", {
      type: 'line',
      data: {
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17'], 
        datasets: [
          {
            label: "Sales",
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: [542, 542, 536, 327, 17, 0, 538, 541],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart();
  }

}

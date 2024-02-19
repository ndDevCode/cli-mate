import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { CommonModule } from '@angular/common';
import * as Aos from 'aos';

@Component({
  selector: 'app-forecast-data',
  standalone: true,
  imports: [CanvasJSAngularChartsModule, CommonModule],
  templateUrl: './forecast-data.component.html',
  styleUrls: ['./forecast-data.component.css'],
})
export class ForecastDataComponent implements OnChanges, OnInit {
  ngOnChanges(): void {
    this.modalDataFromForecast();
  }

  ngOnInit(): void {
    Aos.init();
  }

  @Input() forecastData: any;
  chart: any;
  chartOptions: any;

  modalDataFromForecast() {
    const tempDataPoints: { x: any; y: number }[] = [];
    const tempFeelsDataPoints: { x: any; y: number }[] = [];

    this.forecastData?.list.forEach((data: any) => {
      tempDataPoints.push({
        x: new Date(data.dt * 1000),
        y: data.main.temp,
      });
      tempFeelsDataPoints.push({
        x: new Date(data.dt * 1000),
        y: data.main.feels_like,
      });
    });

    this.chartOptions = {
      animationEnabled: true,
      animationDuration: 2000,
      theme: 'light1',
      title: {
        text: 'Forecast Weather (Temperature)',
        cornerRadius: 4,
      },
      axisX: {
        valueFormatString: 'DD hh:mm TT',
        intervalType: 'day',
        interval: 1,
      },
      axisY: {
        title: 'Temperature',
        interval: 2,
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
        itemclick: function (e: any) {
          if (
            typeof e.dataSeries.visible === 'undefined' ||
            e.dataSeries.visible
          ) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        },
      },
      data: [
        {
          type: 'line',
          showInLegend: true,
          name: 'Mean Temp',
          xValueFormatString: 'DD hh:mm TT',
          dataPoints: tempDataPoints,
        },
        {
          type: 'line',
          showInLegend: true,
          name: 'Feels Like Temp',
          dataPoints: tempFeelsDataPoints,
        },
      ],
    };
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-data-card',
  standalone: true,
  templateUrl: './main-data-card.component.html',
  styleUrls: ['./main-data-card.component.css'],
})
export class MainDataCardComponent {
  @Input() weatherData: any;
}

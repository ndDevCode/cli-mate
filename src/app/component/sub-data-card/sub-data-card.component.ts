import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-data-card',
  standalone: true,
  templateUrl: './sub-data-card.component.html',
  styleUrls: ['./sub-data-card.component.css'],
})
export class SubDataCardComponent {
  @Input() weatherData: any;
}

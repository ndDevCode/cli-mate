import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import * as Aos from 'aos';

@Component({
  selector: 'app-sub-data-card',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './sub-data-card.component.html',
  styleUrls: ['./sub-data-card.component.css'],
})
export class SubDataCardComponent implements OnInit{
  ngOnInit(): void {
      Aos.init();
  }
  @Input() weatherData: any;
}

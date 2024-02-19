import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as Aos from 'aos';

@Component({
  selector: 'app-main-data-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main-data-card.component.html',
  styleUrls: ['./main-data-card.component.css'],
})
export class MainDataCardComponent implements OnInit, OnChanges {
  @Input() weatherData: any;

  public imageData: any;
  public backgroundUrl: string = '';
  constructor(private unsplashService: UnsplashService) {}
  ngOnInit(): void {
    Aos.init();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getBackgroundPhoto(this.weatherData?.weather[0].description);
  }
  getBackgroundPhoto(condition: string) {
    this.unsplashService.getPhoto(condition).subscribe((res: any) => {
      this.backgroundUrl = res.results[1].urls.full;
    });
  }
}

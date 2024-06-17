import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoCardComponent } from '../../shared/infoCards/infoCard.component';
import { HomeImagesComponent } from '../../shared/homeImages/homeImages.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    HomeImagesComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }

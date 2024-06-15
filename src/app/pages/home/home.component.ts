import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InfoCardComponent } from '../../shared/infoCards/infoCard.component';
import { HomeImagesComponent } from '../../shared/homeImages/homeImages.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    HomeImagesComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }

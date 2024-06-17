import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-images',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './homeImages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeImagesComponent { 
  // listado de urls
  public images = [
    '../../../assets/images/eco-skincare.jpg',
    '../../../assets/images/eco-hat.webp',
    '../../../assets/images/eco-shirt.webp',
    '../../../assets/images/eco-phone.jpg'
  ];
}

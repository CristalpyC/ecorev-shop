import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './infocards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfoCardComponent { 
  public items = [
    {title: 'Sostenibilidad', img: '../../../assets/images/botellas.png'}, 
    {title: 'Calidad' , img: '../../../assets/images/recilaje.png'},
    {title: 'Creatividad' , img: '../../../assets/images/bolsas.png'},
  ];
}

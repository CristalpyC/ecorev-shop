import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-shopcart',
  standalone: true,
  imports: [
    CommonModule,
    ModalComponent
  ],
  templateUrl: './shop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopcartComponent { }

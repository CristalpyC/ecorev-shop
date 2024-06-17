import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCardComponent } from '../../shared/productCards/productCard.component';
import { AlertsService } from '../../services/alerts/alerts.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    ModalComponent
  ],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {}

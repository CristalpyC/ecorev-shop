import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent { 
  constructor( public modalService: ModalService ){
    
  }
  public productItems = this.modalService.getProductos();
  

  closeModal(){
    this.modalService.closeModal();
  }

  showModal() {
    this.modalService.showModal();
  }
  
}

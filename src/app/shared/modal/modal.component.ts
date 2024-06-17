import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModalService } from '../../services/modal/modal.service';

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
  constructor( public modalService: ModalService){}

  closeModal(){
    this.modalService.closeModal();
  }
}

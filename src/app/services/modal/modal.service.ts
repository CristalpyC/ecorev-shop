import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public showModalFlag: boolean = false;

  showModal() {
    this.showModalFlag = true;
  }

  closeModal() {
    this.showModalFlag = false;
  }

}

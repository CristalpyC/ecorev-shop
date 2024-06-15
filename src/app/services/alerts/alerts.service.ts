import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  timeAlert(icon: SweetAlertIcon, text: string, title: string){
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500,
      showConfirmButton: false
    });
  }

}

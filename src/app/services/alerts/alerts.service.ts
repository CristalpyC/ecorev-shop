import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

//Configuración de alertas
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  // Alerta reutilizable, con parametros de texto, título e íconos (este usa el tipado estricto de Sweet Alert Icons)
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

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent { 
  // Campos
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', Validators.required);

  constructor(private showAlert: AlertsService){}

  alert(){
    if(!this.name.errors?.['required'] && !this.email.errors?.['required'] && !this.message.errors?.['email'] && !this.message.errors?.['required']){
      this.showAlert.timeAlert('success','¡Gracias por contactarnos!','Mensaje enviado');
    } else{
      this.showAlert.timeAlert('error','Complete los datos','Error');
    }
  }

}

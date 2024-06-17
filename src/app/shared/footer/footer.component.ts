import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    FormComponent,
  ],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent { }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { ModalService } from '../../services/modal/modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    RouterModule,
    ModalComponent,
  ],
  templateUrl:'./menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {  
  public menuItems = routes
    .map(route => route.path);
}

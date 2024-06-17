import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
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
  public isMobileMenuOpen = false; //Estado inicial: Establece la vista del menú móvil como false

  public menuItems = routes
    .map(route => route.path);
  
  //Método para abrir y cerrar menú móvil
  public closeMenu(){
    this.isMobileMenuOpen = false;
  }

  public openMenu(){
    this.isMobileMenuOpen = true;
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
    RouterModule
  ],
  templateUrl:'./menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {  
  public menuItems = routes
    .map(route => route.path)

  constructor(){
    console.log(this.menuItems[1])
  }
}

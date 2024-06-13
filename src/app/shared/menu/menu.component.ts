import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent
  ],
  templateUrl:'./menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { }

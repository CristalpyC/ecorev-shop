import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<img class="w-[8rem]" src="../../../assets/images/logo.png" alt="">`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent { }

import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <footer class="text-center">
    <hr>
    <app-menu-list></app-menu-list>
    <p>
      <i class="fa fa-align-center" aria-hidden="true">CopyRight CC | {{year}}</i>
    </p>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

  year:number=2023;
}

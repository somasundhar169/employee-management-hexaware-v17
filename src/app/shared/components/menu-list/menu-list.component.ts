import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule
  ],
  template: `
           <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
          
            <a class="nav-link active" aria-selected="false" aria-current="page" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-selected="false" routerLink="/concepts">Concepts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-selected="false" routerLink="/employee-manager">Employee Manager</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-selected="false" routerLink="/about">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-selected="false" routerLink="/contact">Contact us</a>
          </li>
         </ul>
  `,
  styles: ``
})
export class MenuListComponent {

}

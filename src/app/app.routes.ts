import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
   {path:'', component:HomeComponent,title:'Home'},
   {path:'concepts', component:ConceptsComponent,title:'Concept'},
   {path:'about', component:AboutComponent,title:'About'},
   {path:'contact', component:ContactComponent,title:'Contact'},
];

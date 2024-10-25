import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from "./components/profile/profile.component";
import { ReportsComponent } from './components/reports/reports.component';
import { CommonModule } from '@angular/common';
import { ColorizerDirective } from './directives/colorizer.directive';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [CommonModule, FormsModule, ProfileComponent,ReportsComponent,ColorizerDirective],
  templateUrl: './concepts.component.html',
  styles: ``
})
export class ConceptsComponent {

  name:string=' Ex: Interpolation Example'

  prop:string='Ex: Property Binding'

  dynamicClick: string='Click Me'

  isDisabled:boolean=false;

  twoWays:string='Two Way Data Binding';

  myValue="Parent Component"

  isTrue=false

  skills=['Java','C','Angular','AWS']

  reportValue={
    id:0,
    name:''
  }

  clickme(event:any){
    event.target.disabled=true
    this.dynamicClick='Clicked'
    console.log('disabled');
  }

  onReport(event:any){
        console.log(event);
        this.reportValue=event;

  }
}

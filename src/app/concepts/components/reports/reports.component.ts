import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  template: `
    <p>
      Report Generation:
    </p>
    <button class="btn btn-primary" (click)="generateReport()">GENERATE</button>
  `,
  styles: ``
})
export class ReportsComponent {


  @Output() 
  report=new EventEmitter();

  

  generateReport(){
    this.report.emit({
      id:1,
      name:'Rocky'
    });
  }
}

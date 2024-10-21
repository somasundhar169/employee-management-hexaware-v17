import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorizer]',
  standalone: true
})
export class ColorizerDirective {

  constructor(private elementRef:ElementRef) { 
    console.log("Element Ref:",elementRef);
  }

}

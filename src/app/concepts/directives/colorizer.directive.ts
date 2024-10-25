import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]',
  standalone: true
})
export class ColorizerDirective {

  divElement:any;

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { 
    this.divElement=elementRef.nativeElement;
    this.changeStyle()
    this.createDynamicElement()

  }

  changeStyle(){
    this.renderer.setStyle(this.divElement,"color","green");
    this.renderer.setStyle(this.divElement,"backgroundColor","yellow");
  }

  createDynamicElement(){
        const paragraphElement=this.renderer.createElement('p');
        this.renderer.setStyle(paragraphElement,'float','right');
        this.renderer.setStyle(paragraphElement,'font-size','12px');
        this.renderer.setStyle(paragraphElement,'background','white');
        
        const poweredByText=this.renderer.createText('Powered By Text');
        this.renderer.appendChild(paragraphElement,poweredByText);
        this.renderer.appendChild(this.divElement,paragraphElement);
  }


  @HostListener('click',['$event'])
  createDynamicEvent(event:Event){
    console.log(event.target); 
    this.renderer.setStyle(event.target,'background','pink') 
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private reference: ElementRef) { 
    // console.log("directiva llamada");
    // reference.nativeElement.style.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseenter')inMouse(){
    this.resaltar(this.newColor || 'yellow')
  }

  @HostListener('mouseleave')leaveMouse(){
    this.resaltar(null);
  }

  @Input("appResaltado") newColor: string;

  private resaltar(color: string){
    this.reference.nativeElement.style.backgroundColor = color;
  }
}

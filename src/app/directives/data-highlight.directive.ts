import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDataHighlight]',
})
export class DataHighlightDirective {
  constructor(private el1: ElementRef) {
    console.log(this.el1);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    // this.el1.nativeElement.style.backgroundColor = 'yellow';
    this.el1.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el1.nativeElement.style.fontWeight = 'normal';
  }
}

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNgStyle]',
  standalone: true
})
export class NgStyleDirective {

  constructor(
    private elementref: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  set appNgStyle(value: Object) {
    const styles: [string, any][] = Object.entries(value);
    for (const [key, value] of styles) {
      this.renderer.setStyle(this.elementref.nativeElement, key, value);
    }
  }

}

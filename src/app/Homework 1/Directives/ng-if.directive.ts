import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIf]',
  standalone: true
})
export class NgIfDirective {

  show: boolean = true;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input()
  set appNgIf(condition: boolean) {
    this.show = condition;
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  @Input()
  set appNgIfElse(elseTemplate: TemplateRef<any>) {
    if (!this.show) {
      this.viewContainerRef.createEmbeddedView(elseTemplate);
    } else {
      this.viewContainerRef.clear();
    }
  }
}

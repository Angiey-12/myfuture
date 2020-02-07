/**
 * DynamicComponentDirective
 * =========================
 * This directive is what enables dynamic components to work.
 */

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComponentAnchor]'
})
export class ComponentAnchorDirective {

  constructor(public viewContainerRef?: ViewContainerRef) { }

}

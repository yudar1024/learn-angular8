import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // 使用指令与ng-template 配合使用的时候，必须要带[]中括号，不然不生效。
  selector: '[childDirective]',
})
export class ChildDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

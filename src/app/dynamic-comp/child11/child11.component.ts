import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component implements OnInit {
  @Input()
  public title:string="默认的标题";

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent(param):void{
    this.btnClick.emit(param+"组件的点击事件...");
  }
}

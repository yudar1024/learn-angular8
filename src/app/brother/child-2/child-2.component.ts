import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.css']

})
export class Child2Component implements OnInit {
  public events:Array<any>=[];
  subscription: Subscription;


  constructor(private eventBusService:EventBusService) {
    this.subscription = this.eventBusService.event1Observer$.subscribe((value)=>{
      this.events.push(value+"-"+new Date());
      console.info(this.events);
    });
  }

  ngOnInit() {
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  sendEvent2(){
    this.eventBusService.sendEvent2("第2个组件触发的事件");
  }
}

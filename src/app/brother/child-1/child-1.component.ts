import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.css']
})
export class Child1Component implements OnInit {
  subscription: Subscription;

  eventReceived: string [] = [];
  constructor(public eventBusService: EventBusService) {
    this.subscription = eventBusService.event2Observer$.subscribe((value) => {
        this.eventReceived.push(value + '-' + new Date());
    });
   }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  public triggerEventBus():void{
    this.eventBusService.sendEvent1("第一个组件触发的事件");
  }
}

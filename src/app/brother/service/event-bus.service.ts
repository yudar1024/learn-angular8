import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * 用来充当事件总线的Service
 */
@Injectable()
export class EventBusService {
  private event1:Subject<string> = new Subject<string>();
  private event2:Subject<string> = new Subject<string>();

  event1Observer$ = this.event1.asObservable();
  event2Observer$ = this.event2.asObservable();

  public sendEvent1(message:string){
    this.event1.next(message);
  }

  public sendEvent2(message:string){
    this.event2.next(message);
  }

  constructor() { }

}

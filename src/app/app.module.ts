import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { Child11Component } from './dynamic-comp/child11/child11.component';
import { ChildDirective } from './dynamic-comp/child.directive';

@NgModule({
  declarations: [
    AppComponent,
    DynamicCompComponent,
    Child11Component,
    ChildDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[Child11Component]
})
export class AppModule { }

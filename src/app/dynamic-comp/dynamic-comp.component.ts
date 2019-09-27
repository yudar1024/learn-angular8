import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Child11Component } from './child11/child11.component';
import { ChildDirective } from './child.directive';

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css']
})
export class DynamicCompComponent implements OnInit {
  //这里引用模板里面定义的dyncomp容器标签， 此处的变量名，必须与ChildDirective 的selector 中括号中的名称一样，不然会获取不到实例。
  // 如果selector中括号中使用驼峰命名，那么变量名与中括号中的内容一样。
  // 如果selector中括号中使用的是-连接，比如ad-host，那么变量名称必须为去掉-的驼峰命名，即adHost
  @ViewChild(ChildDirective, {static: true}) childDirective: ChildDirective;


  comp1: ComponentRef<Child11Component>;
  comp2: ComponentRef<Child11Component>;

  constructor(
    private resolver: ComponentFactoryResolver) {

  }

  ngOnInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("动态创建组件的实例...");
    const childComp = this.resolver.resolveComponentFactory(Child11Component);
    let viewContainerRef = this.childDirective.viewContainerRef;
    viewContainerRef.clear();
    this.comp1 = viewContainerRef.createComponent(childComp);
    this.comp1.instance.title = "第一个";
    this.comp1.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });

    //可以创建多个组件实例出来
    // let temp1 = this.dyncomp.createComponent(childComp);
    // temp1.instance.title = "第2个动态子组件";
    // let temp2 = this.dyncomp.createComponent(childComp);
    // temp2.instance.title = "第3个动态子组件";
    // let temp3 = this.dyncomp.createComponent(childComp);
    // temp3.instance.title = "第4个动态子组件";
    // let temp4 = this.dyncomp.createComponent(childComp);
    // temp4.instance.title = "第5个动态子组件";
    // let temp5 = this.dyncomp.createComponent(childComp, 0);
    // temp5.instance.title = "第6个动态子组件";

    /**
     * createComponent方法可以调用很多次，会动态创建出多个组件实例
     * 方法有第二个参数，表示组件渲染的顺序
     */
    this.comp2 = viewContainerRef.createComponent(childComp);
    this.comp2.instance.title = "第二个子组件";
    this.comp2.instance.btnClick.subscribe((param)=>{
      console.log("--->" + param);
    });
  }

  ngAfterContentInit() {
   
  }
  ngAfterViewInit(): void {
    
  }

  public destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }
}

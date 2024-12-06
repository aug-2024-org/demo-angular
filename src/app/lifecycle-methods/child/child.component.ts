import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  counter: number = 1;
  @Input() message:string = "";

  constructor() {
  console.log("ChildComponent:Constructor:", this.counter++);
  }

  ngOnChanges() {
    console.log("ChildComponent:OnChanges:", this.counter++);
  }


  ngOnInit() {
    console.log("ChildComponent:OnInit:", this.counter++);
  }

  ngDoCheck() {
    console.log("ChildComponent:DoCheck:", this.counter++);
  }

  ngAfterContentInit() {
    console.log("ChildComponent:AfterContentInit:", this.counter++);
  }

  ngAfterContentChecked() {
    console.log("ChildComponent:AfterContentChecked:", this.counter++);
  }

  ngAfterViewInit() {
    console.log("ChildComponent:AfterViewInit:", this.counter++);
  }

  ngAfterViewChecked() {
    console.log("ChildComponent:AfterViewChecked:", this.counter++);
  }

  ngOnDestroy() {
    console.log("ChildComponent:OnDestroy:" , this.counter++);
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'parent',
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  displayChild: boolean = false;
  counter: number = 1;
  constructor() {
    console.log("AppComponent: Constructor: ", this.counter++);
  }

  toggle() {
    console.log("child toggled....")
    this.counter = 1;
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log("AppComponent: OnChanges: ", this.counter++);
  }

  ngOnInit() {
    console.log("AppComponent: OnInit: ", this.counter++);
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck: ", this.counter++);
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit: ", this.counter++);
  }

  ngAfterContentChecked() {
  console.log("AppComponent:AfterContentChecked: ", this.counter++);
  }

  ngAfterViewInit() {
  console.log("AppComponent:AfterViewInit: ", this.counter++);
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked: ", this.counter++);
  }

  ngOnDestroy() {
    console.log("AppComponent:OnDestroy: ", this.counter++);
  }
}

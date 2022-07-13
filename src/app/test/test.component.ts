import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Start new topic Style {{name}}</h2>
            <input [id]="myId" type="text" value="Revan">
            <input disabled id="{{myId}}" type="text" value="Revan">
            <input [disabled]="false" id="{{myId}}" type="text" value="Revan">
            <input bind-disabled="false" id="{{myId}}" type="text" value="Revan">
          <h4 class="text-A"><li>BindingA</li></h4>
          <h4 class="text-B"><li>BindingB</li></h4>
          <h4 class="text-C" [class]="BClass"><li>BindingC</li></h4>
          <h4 [class.text-A]="hasError"><li>BindingC</li></h4>
          <h1 [ngClass]="MS"><li>BindingC</li></h1>
          <p [style.color]="hasError ? 'red' :'green'"><li><strong>Attribute</strong> value con't changes </li></p>
          <p [style.color]="another">Style binding</p>
          <p [ngClass]="MS"><li><strong>Property</strong> value changes </li></p>
          <!--binding Events-->
          <button (click)="onclick($event)">Events</button>
          <button (click)="greeting='Well done revan'">Events</button>
          {{greeting}}

  `,
  styles: [`
   .text-A{
    color:blue;
   }  
  
   .text-B{
    color:Red;
   }  
  
   .text-C{
    font-style:italic;
   }  
  
  `]
})
export class TestComponent implements OnInit {
public name = "Binding";
public myId = "testId";
public BClass = "text-A"
public hasError = false;
public isSpecial =true;
public greeting = "";
public another = "orange"
public MS = {
  "text-A" : !this.hasError,
  "text-B" : this.hasError,
  "text-C" : this.isSpecial
}
  constructor() { }

  ngOnInit(): void {
  }

onclick(event: any){
console.log(event);
this.greeting = "Welcome to codevoulation"
this.greeting = event.type
}

}

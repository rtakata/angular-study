import { Component } from '@angular/core';
import { trigger, state, style,
  transition, animate} from '@angular/animations';

@Component({
  selector: 'my-app',
  animations: [
    trigger('labelState', [
      state('active', style({ transform: 'translateX(0)' })),
      transition('void => active', [
        style({transform: 'translateX(100%)'}),
        animate(300)
      ]),
      transition('active => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])    
  ],
  template: `
    <label for="show">表示／非表示：</label>
    <input id="show" name="show" type="checkbox" [(ngModel)]="show" />
    <h2 *ngIf="show" [@labelState]="'active'"
    (@labelState.start)="onanim($event)" (@labelState.done)="onanim($event)">
      こんにちは、Angular！</h2>
  `
})
export class AppComponent  { 
  onanim(e: any) {
    console.log(e);
  }
}


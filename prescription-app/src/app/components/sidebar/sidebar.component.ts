import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('400ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  toggle: boolean = true;
  container: string = 'login';
  state: string = 'default';
  state2: string = 'default';
  state3: string = 'rotated';
  constructor() {
  }

  rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  rotate2() {
    this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
  }

  rotate3() {
    this.state3 = (this.state3 === 'default' ? 'rotated' : 'default');
  }

  ngOnInit() {
  }

  show() {
    this.toggle = true;
  }

  hide() {
    this.toggle = false;
  }

  changeContainer(container: string) {
    this.container = container;
  }
}

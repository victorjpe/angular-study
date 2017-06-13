import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css'],
  animations: [
    trigger('iconAnimations', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2.5)',
      })),
      transition('small <=> large', animate('100ms linear'))
    ])
  ]
})
export class IconsComponent {

  constructor() { }

  state: string = 'small';

  animate(event) {
    if (event === 'enter')
      this.state = 'large';

    if (event === 'leave')
      this.state = 'small';
  }

  toggle() {
    this.state =  this.state === 'large'? 'small': 'large';
  }

  @Input() icon: string;
  @Input() ifActionIcon: boolean;
}
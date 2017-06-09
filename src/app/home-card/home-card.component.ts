import { Component, OnInit, Input, Output } from '@angular/core';
import { Link } from '../../classes/link';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
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
export class HomeCardComponent implements OnInit {

  state: string = 'small';
  constructor() {}

  ngOnInit() {
  }

  animate(event) {
    if(event === 'enter')
    this.state = 'large';

    if(event === 'leave')
    this.state = 'small';
  }

  @Input() heading: string = '';
  @Input() showSubTitle: boolean = false;
  @Input() link: Link;
}
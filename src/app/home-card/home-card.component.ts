import { Component, OnInit, Input, Output } from '@angular/core';
import { Link } from '../../classes/link';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  @Input() heading: string = '';
  @Input() showSubTitle: boolean = false;
  @Input() link: Link;
}
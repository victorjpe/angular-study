import { Component, OnInit } from '@angular/core';
import { Link } from '../classes/link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUpLinks: Link = { linkUrl: '/signup', icon: 'fa-user-plus' };
}
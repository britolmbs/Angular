import { Component, OnInit, Input } from '@angular/core';
import { hero } from '../domain/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: hero;

  constructor() { }

  ngOnInit() {
  }

}

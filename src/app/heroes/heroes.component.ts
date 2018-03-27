import { Component, OnInit } from '@angular/core';
import { hero, hero } from '../domain/hero';
import { HEROES } from '../domain/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  hero: hero = {
    id: 1,
    name: "Superman"
  }

  heroes : hero[]= HEROES;
  selectedHero: hero;
  

  ngOnInit() {
  }

  onSelect(hero: hero): void{
    this.selectedHero= hero;
  }
}

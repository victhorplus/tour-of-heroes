import { Component, OnInit } from '@angular/core';

// Interface Hero
import { Hero } from '../hero';

// Banco de dados
import { HERO } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 11,
    name: 'Windstorm',
    img: ''
  }
 
  heroes: Hero[] = HERO;
  selectedHero: Hero;
 
  constructor() { }
  ngOnInit(): void {}

  onSelect(hero){
    this.selectedHero = hero;
  }
}

import { Component, OnInit } from '@angular/core';

// Interface Hero
import { Hero } from '../hero';

// Service
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
    this.heroes.push(this.hero)
  }

  onSelect(hero){
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    //this.heroes = this.heroService.getHeroes();
  }

  hero: Hero = {
    id: 11,
    name: 'Windstorm',
    img: ''
  }
 
  heroes: Hero[];
  selectedHero: Hero;
 
}

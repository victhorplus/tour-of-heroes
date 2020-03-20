import { Component, OnInit } from '@angular/core';

// Interface Hero
import { Hero } from '../hero';

// Service
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero){
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`)
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
 
  heroes: Hero[];
  selectedHero: Hero;
 
}

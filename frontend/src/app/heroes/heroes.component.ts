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
  heroes: Hero[];

  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  add(name: String): void{
    if(!name){ return;}

    this.heroService.addHero({name} as Hero).subscribe(hero => this.heroes.push(hero))
  }
}

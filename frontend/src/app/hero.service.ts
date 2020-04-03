import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'

import { MessageService } from './message.service'
import { Hero } from './hero'
import { HERO } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<Hero[]>{
    this.messageService.add('Hero service: fetched heroes')
    return of(HERO);
  }
  
  getHero(id: number): Observable<Hero>{
    this.messageService.add('Hero service: fetched hero');
    return of(HERO.find(hero => hero.id === id));
  }

}

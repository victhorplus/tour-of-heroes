import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'

import { Hero } from './hero'
import { HERO } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  
  getHeroes(): Observable<Hero[]>{
    return of(HERO);
  }

}

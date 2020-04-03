import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators' ;
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = "http://localhost:8080/api/heroes"; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ){}
  
  getHeroes(): Observable<Hero[]>{
    this.log('Hero service: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
              tap( _ => this.log('fetched heroes')),
              catchError(this.handleError<Hero[]>('getHeroes', []))
            )
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);

      return of (result as T);
    }
  }
  
  getHero(id: number): Observable<Hero>{
    this.log('Hero service: fetched hero');
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
            .pipe(
              tap(_ => this.log('fetched hero id: '+id)),
              catchError(this.handleError<Hero>('getHero', ))
            )
  }

  updateHero(hero: Hero): Observable<any>{
    this.log("Hero Service: update hero");
    return this.http.put(`${this.heroesUrl}/${hero.id}`, hero, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Hero updated: ${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      )
  }
  private log(message){
    this.messageService.add(message);
  }
}

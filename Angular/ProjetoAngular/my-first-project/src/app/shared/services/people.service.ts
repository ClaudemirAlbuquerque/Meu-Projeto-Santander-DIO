import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
      let peopleArray = [
          {
            firstName: 'Claudemir',
            lastName: 'Albuquerque',
            age: 34
          },
          {
            firstName: 'Natalia',
            lastName: 'Albuquerque',
            age: 36
          },
          {
            firstName: 'Natalie',
            lastName: 'Albuquerque',
            age: 8
          },
          {
            firstName: 'Bela',
            lastName: 'Albuquerque',
            age: 2
          },
    ]

    return of(peopleArray)
  }
}

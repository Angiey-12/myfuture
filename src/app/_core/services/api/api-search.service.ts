import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiSearchService {
  constructor(private http: HttpService) { }

   // Not sure where this is being used at the moment
   findResource() {
    return this.http.get('sitefinity/resourceSearchoption');
  }

  // Not sure where this is being used at the moment
  findTermForItemTypeAndId(term: string, type: string, id: number) {
    return this.http.get('search/' + type + '/' + id + '?searchTerm=' + encodeURIComponent(term));
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { SearchService } from '../search.service';

@Injectable({
  providedIn: 'root'
})
export class ApiOccupationService extends SearchService {
  constructor(private http: HttpService) {
    super();
   }

  getOne(id: string) {
    return this.http.get('occupation/' + id);
  }

  search(query: object, viewParams: object = {}) {
    return this.http.get('occupation/search', {
      params: this.http.convertObjectIntoHttpParams({...query, ...viewParams})
    });
  }
}

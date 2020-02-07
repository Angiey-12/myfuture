import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

import { SearchService } from '../search.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCourseService extends SearchService {
  constructor(private http: HttpService) {
    super();
  }

  getOne(id: string) {
    return this.http.get('course/' + id);
  }

  search(query: object, viewParams: object = {}) {
    return this.http.get('course/search', {
      params: this.http.convertObjectIntoHttpParams({...query, ...viewParams})
    });
  }
}

import { Injectable } from '@angular/core';

import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiContentService {
  constructor(private http: HttpService) { }

  static TYPES = {
    CAREER_INSIGHT: 'career-insight',
    CASE_STUDY: 'case-study'
  };

  get(type: string, page?: number) {
    return this.http.get(type + (page ? '/page/' + page : ''));
  }

  getOne(type: string, id: string) {
    return this.http.get(type + '/' + id);
  }

  getNextPage(type: string, currentPage?: number) {
    return this.get(type, currentPage ? currentPage++ : 2);
  }

  getPreviousPage(type: string, currentPage?: number) {
    return this.get(type, currentPage ? currentPage-- : 1);
  }

  search(type: string, params?: object) {
    return this.http.get(type + '/search?' + Object.keys(params || {}).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&'));
  }

  getCategories(type: string) {
    return this.http.get('common/flat-taxon/' + type + '-categories');
  }

  getBreadcrumbs(url: string) {
    return this.http.get('sitefinity/page?url=' + encodeURIComponent(url));
  }

  getContentBlock(block: string) {
    return this.http.get('sfapi/default/contentitems/' + block);
  }
}

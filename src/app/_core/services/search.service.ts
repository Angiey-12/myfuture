import { Injectable } from '@angular/core';

import * as bodybuilder from 'bodybuilder';

@Injectable({
  providedIn: 'root'
})
export abstract class SearchService {
  constructor() { }

  abstract search(query: object, viewParams?: object);

  searchWithQueryBuilder(query: bodybuilder.Bodybuilder, viewParams: object) {
    return this.search(query.build(), viewParams);
  }

  startQueryBuilder(): bodybuilder.Bodybuilder {
    return bodybuilder();
  }
}

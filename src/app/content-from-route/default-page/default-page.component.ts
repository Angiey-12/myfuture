import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';
import { ObjectFromApi } from 'src/app/_core/models/object-from-api';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit, OnChanges, ObjectFromApi {
  @Input() title: string;
  @Input() data: any;

  constructor(private titleService: Title) {
    this.setPageTitle();
  }

  ngOnInit() {
    this.setPageTitle();
  }

  ngOnChanges() {
    this.setPageTitle();
  }

  setPageTitle() {
    this.titleService.setTitle(
      (environment.title.prefix || '') +
      ((this.data ? this.data.title : null) || this.title) +
      (environment.title.suffix || '')
    );
  }
}

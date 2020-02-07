/**
 * ContentFromRouteComponent
 * =========================
 * This component decides on the component to display depending on what the content API
 * returns. If it cannot find certain content, it will use the NotFoundPageComponent, otherwise
 * it uses the DefaultPageComponent
 */

import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComponentAnchorDirective } from 'src/app/_shared/directives/component-anchor.directive';
import { ApiContentService } from 'src/app/_core/services/api/api-content.service';
import { ObjectFromApi } from 'src/app/_core/models/object-from-api';

import { DefaultPageComponent } from './default-page/default-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AccessibleExternalLinksPipe } from 'src/app/_shared/pipes/accessible-external-links.pipe';

@Component({
  selector: 'app-content-from-route',
  templateUrl: './content-from-route.component.html',
  styleUrls: ['./content-from-route.component.scss']
})
export class ContentFromRouteComponent implements OnInit {
  url: string;

  // @ViewChild(ComponentAnchorDirective, {static: true}) componentAnchor: ComponentAnchorDirective;
  @ViewChild('componentAnchor', { read: ViewContainerRef }) componentAnchor;

  constructor(
    private route: ActivatedRoute,
    private apiContent: ApiContentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    const url = this.route.snapshot.url;
    let type = '';

    if (url.length) {
      type = url.shift().toString();
    }

    this.apiContent.getOne(type, url.join('/'))
      .subscribe(
        (data: object) => {
          this.loadComponent(DefaultPageComponent, data);
        },
        () => {
          this.loadComponent(NotFoundPageComponent, {});
        }
      );
  }

  loadComponent(component, data: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.componentAnchor.createComponent(componentFactory);

    if ('body' in data) {
      data.body = new AccessibleExternalLinksPipe().transform(data.body);
    }

    (componentRef.instance as ObjectFromApi).data = data;
  }

}

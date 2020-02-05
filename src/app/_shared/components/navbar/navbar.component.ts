import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations: [
      trigger('toggle', [
        state(
          VisibilityState.Hidden,
          style({ opacity: 0, transform: 'translateY(-100%)' })
        ),
        state(
          VisibilityState.Visible,
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
        transition('* => *', animate('200ms ease-in'))
      ])
    ]
})
export class NavbarComponent implements OnInit, AfterViewInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    public isVisible = true;

    @HostBinding('@toggle')
    get toggle(): VisibilityState {
      return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
    }

    constructor(public location: Location, private router: Router) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url !== this.lastPoppedUrl) {
               this.yScrollStack.push(window.scrollY);
           }
       } else if (event instanceof NavigationEnd) {
           if (event.url === this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else {
               window.scrollTo(0, 0);
           }
       }
     });
      this.location.subscribe((ev: PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
    }

    ngAfterViewInit() {
      const scroll$ = fromEvent(window, 'scroll').pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
        distinctUntilChanged(),
        share()
      );

      const scrollUp$ = scroll$.pipe(
        filter(direction => direction === Direction.Up)
      );

      const scrollDown = scroll$.pipe(
        filter(direction => direction === Direction.Down)
      );

      scrollUp$.subscribe(() => (this.isVisible = true));
      scrollDown.subscribe(() => (this.isVisible = false));
    }

    isHome() {
        const titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === '#/home' ) {
            return true;
        } else {
            return false;
        }
    }

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '#/documentation' ) {
            return true;
        } else {
            return false;
        }
    }
}

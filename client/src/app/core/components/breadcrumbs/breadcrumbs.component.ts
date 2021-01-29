import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {IBreadCrumbs} from '../../models/breadcrumbs';
import {distinctUntilChanged, filter} from 'rxjs/operators';


@Component({
  selector: 'study-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: IBreadCrumbs[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      distinctUntilChanged(),
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    })
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadCrumbs[] = []): IBreadCrumbs[] {
    let label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data.breadcrumb : '';
    let path = route.routeConfig && route.routeConfig.data ? route.routeConfig.path : '';

    const lastRoutePart = path.split('/').pop();
    const isDynamicRoute = lastRoutePart.startsWith(':');
    if (isDynamicRoute && !!route.snapshot) {
      const paramName = lastRoutePart.split(':')[1];
      path = path.replace(lastRoutePart, route.snapshot.params[paramName]);
      label = route.routeConfig.data.breadcrumb + '  ' + (route.snapshot.params[paramName]);
    }

    const nextUrl = path ? `${url}/${path}` : url;

    const breadcrumb: IBreadCrumbs = {
      label,
      url: nextUrl,
    };

    const newBreadcrumbs = breadcrumb.label ? [ ...breadcrumbs, breadcrumb ] : [ ...breadcrumbs];
    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }
}

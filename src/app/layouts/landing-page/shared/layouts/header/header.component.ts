import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public appName = environment.appName;
  public menuOptions: any = [
    {
      display: 'Home',
      path: 'home',
      icon: 'home',
    },
    {
      display: 'Products',
      path: 'products',
      icon: 'shop_two',
    },
    { display: 'About', path: 'about', icon: 'info' },
    { display: 'Contacts', path: 'contacts', icon: 'contact_support' },
  ];

  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public goToAccount(): void {
    this.router.navigate(['', 'account']);
  }

  @HostListener('window:scroll', [])
  scrolledDown(): boolean {
    return document.documentElement.scrollTop > 20;
  }
}

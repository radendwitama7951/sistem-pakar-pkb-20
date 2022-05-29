import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tutorial-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.TabletPortrait])
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
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
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  scrolledDown(): boolean {
    return document.documentElement.scrollTop > 20;
  }
}

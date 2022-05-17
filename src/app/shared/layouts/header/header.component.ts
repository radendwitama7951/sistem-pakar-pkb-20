import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public menuOptions: any = [
    { display: 'Home', path: 'home' },
    { display: 'Products', path: 'products' },
    { display: 'About', path: 'about' },
    { display: 'Contacts', path: 'contacts' },
  ];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  scrolledDown(): boolean {
    return document.documentElement.scrollTop > 20;
  }
}

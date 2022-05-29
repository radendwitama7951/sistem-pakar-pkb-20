import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-landing-page-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class FooterComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}

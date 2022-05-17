import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-diagnosa-diabetes',
  templateUrl: './diagnosa-diabetes.component.html',
  styleUrls: ['./diagnosa-diabetes.component.scss'],
})
export class DiagnosaDiabetesComponent implements OnInit {
  @ViewChild('drawer') sidenav!: MatSidenav;
  public activeMenu!: string;

  public menuOptions: any = [
    {
      display: 'Edukasi',
      path: 'edukasi',
      icon: '',
    },
    {
      display: 'Diagnosa',
      path: 'diagnosa',
      icon: '',
    },
    {
      display: 'Training-Machine',
      path: 'training-machine',
      icon: '',
    },
  ];

  public extrasOptions: any = [
    {
      display: 'Settings',
      path: 'settings',
      icon: 'settings',
    },
    {
      display: 'Help',
      path: 'help',
      icon: 'help_outline',
    },
    {
      display: 'Exit',
      path: '',
      icon: 'exit_to_app',
    },
  ];

  public isDesktop$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.WebLandscape)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    public router: Router,
    private activeRoute: ActivatedRoute,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.activeMenu = this.router.url.slice('/app/diagnosa-diabetes/'.length);
  }

  goToMenu(path: string, display: string): void {
    // this.router.navigate([path], { relativeTo: this.activeRoute });
    this.activeMenu = display;
  }

  toggleSidenav(event: any): void {
    this.sidenav.toggle();
  }
}

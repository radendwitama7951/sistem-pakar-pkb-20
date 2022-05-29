import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';
import { TutorialService } from 'src/app/core/services/tutorial.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public aplikasiList$!: Observable<any>;
  public tutorial$!: Observable<any>;

  constructor(
    private router: Router,
    private _tutorialService: TutorialService,
    private _landingPageService: LandingPageService
  ) {}

  ngOnInit(): void {
    this.tutorial$ = this._tutorialService.entities$;
    this.aplikasiList$ = this._landingPageService.aplikasiEntities$;
  }

  goToTutorial(id: string): void {
    this.router.navigate(['tutorial', id]);
  }

  goToProduct(path: string): void {
    this.router.navigate(['app', path]);
  }
}

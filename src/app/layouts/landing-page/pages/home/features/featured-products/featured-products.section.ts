import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.section.html',
  styleUrls: ['./featured-products.section.scss'],
})
export class FeaturedProductsSection implements OnInit {
  public featuredProductList$!: Observable<any>;

  constructor(private _landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.featuredProductList$ =
      this._landingPageService.featuredProductEntities$;
  }
}

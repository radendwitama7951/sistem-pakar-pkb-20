import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public aboutList$!: Observable<any>;

  constructor(private _landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.aboutList$ = this._landingPageService.aboutEntities$;
  }
}

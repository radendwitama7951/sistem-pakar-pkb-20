import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.section.html',
  styleUrls: ['./get-started.section.scss'],
})
export class GetStartedSection implements OnInit {
  public getStartedData$!: Observable<any>;

  constructor(private _landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.getStartedData$ = this._landingPageService.getStartedEntities$;
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@Component({
  selector: 'app-quick-intro',
  templateUrl: './quick-intro.section.html',
  styleUrls: ['./quick-intro.section.scss'],
})
export class QuickIntroSection implements OnInit {
  public corporateStatementList$!: Observable<any>;

  constructor(private _landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.corporateStatementList$ =
      this._landingPageService.corporateStatementEntities$;
  }
}

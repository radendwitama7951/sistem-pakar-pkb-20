import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandingPageService } from 'src/app/core/services/landing-page.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public contactUsData$!: Observable<any>;

  constructor(private _landingPageService: LandingPageService) {}

  ngOnInit(): void {
    this.contactUsData$ = this._landingPageService.contactUsEntities$;
  }
}

import { Injectable } from '@angular/core';
import { createClient, EntryCollection } from 'contentful';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  private cdaClient = createClient(environment.contentful);

  public aboutEntities$: BehaviorSubject<any> = new BehaviorSubject([]);
  public aplikasiEntities$: BehaviorSubject<any> = new BehaviorSubject([]);
  public contactUsEntities$: BehaviorSubject<any> = new BehaviorSubject(
    undefined
  );
  public getStartedEntities$: BehaviorSubject<any> = new BehaviorSubject(
    undefined
  );

  public corporateStatementEntities$: BehaviorSubject<any> =
    new BehaviorSubject([]);
  public featuredProductEntities$: BehaviorSubject<any> = new BehaviorSubject(
    []
  );

  constructor() {}

  public loadHomeEntities(): void {
    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'homeGetStarted',
          },
          {}
        )
      )
      .then((entry: EntryCollection<unknown>) => {
        this.getStartedEntities$.next(entry.items[0]);
      });

    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'homeCorporateStatement',
          },
          {}
        )
      )
      .then((entry: EntryCollection<unknown>) => {
        this.corporateStatementEntities$.next(entry.items);
      });

    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'featuredProducts',
          },
          {}
        )
      )
      .then((entry: EntryCollection<unknown>) => {
        this.featuredProductEntities$.next(entry.items);
      });
  }

  public loadAbout(): void {
    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'about',
          },
          {}
        )
      )
      .then((aboutEntry: any) => {
        this.aboutEntities$.next(aboutEntry.items);
      });
  }

  public loadAplikasi(): void {
    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'aplikasi',
          },
          {}
        )
      )
      .then((aplikasiEntry: EntryCollection<unknown>) =>
        this.aplikasiEntities$.next(aplikasiEntry.items)
      );
  }

  public loadContactUs(): void {
    this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: 'contatcUs',
          },
          {}
        )
      )
      .then((contactUsEntry: EntryCollection<unknown>) =>
        this.contactUsEntities$.next(contactUsEntry.items[0])
      );
  }
}

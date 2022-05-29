import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { BehaviorSubject, from, Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

export const cdaClient = createClient(environment.contentful);

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  public tutorialEntities$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {}

  public getAllTurorial(query?: object): Observable<any> {
    return from(
      this.cdaClient.getEntries(
        Object.assign(
          {
            content_type: 'tutorial',
          },
          query
        )
      )
    ).pipe(pluck('items'));
  }

  public loadTutorial(): void {
    this.getAllTurorial().subscribe((tutorialList: any) =>
      this.tutorialEntities$.next(tutorialList)
    );
  }

  public getTutorialByKey(key: string): Observable<any> {
    return from(this.cdaClient.getEntry(key));
  }
}

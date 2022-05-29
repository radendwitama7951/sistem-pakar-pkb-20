import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { BehaviorSubject, from, map, Observable, pluck } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  public entities$: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() {}

  public getAll(query?: object): Observable<any> {
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

  public load(): void {
    this.getAll().subscribe((tutorialList: any) =>
      this.entities$.next(tutorialList)
    );
  }

  public getByKey(key: string): Observable<any> {
    return from(this.cdaClient.getEntry(key));
  }
  public selectEntityById(id: string): Observable<any> {
    return this.entities$.pipe(
      map((tutorialList: Array<any>) =>
        tutorialList.find((_) => _.sys.id == id)
      )
    );
  }
}

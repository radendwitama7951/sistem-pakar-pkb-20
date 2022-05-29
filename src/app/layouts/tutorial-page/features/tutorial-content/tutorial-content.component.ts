import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Observable, switchMap } from 'rxjs';
import { TutorialService } from 'src/app/core/services/tutorial.service';

@Component({
  selector: 'app-tutorial-content',
  templateUrl: './tutorial-content.component.html',
  styleUrls: ['./tutorial-content.component.scss'],
})
export class TutorialContentComponent implements OnInit {
  public tutorialData$!: Observable<any>;

  constructor(
    private _tutorialService: TutorialService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setTutorialData();
    this.tutorialData$.subscribe(console.log);
  }

  public _returnHtmlFromRichText(richText: any) {
    if (
      richText === undefined ||
      richText === null ||
      richText.nodeType !== 'document'
    ) {
      return '<p>Error</p>';
    }

    const options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data }: any) =>
          `<img
            class="mx-auto"
            src="${data.target.fields.file.url}" 
            width="${data.target.fields.file.details.image.width * 0.7}" 
            alt="${data.target.fields.description}"/>
            <br>
        `,
        [BLOCKS.HEADING_2]: ({ content }: any) => `
          <br>
          <h2>${content[0].value}</h2>
        `,
        [BLOCKS.HEADING_4]: ({ content }: any) => `
          <h4>
            <strong>
              ${content[0].value}
            </strong>
          </h4>
        `,
      },
    };

    return documentToHtmlString(richText, options);
  }

  private setTutorialData(): void {
    this.tutorialData$ = this.route.paramMap.pipe(
      switchMap((params) =>
        this._tutorialService.selectEntityById(params.get('id') as string)
      )
    );
  }
}

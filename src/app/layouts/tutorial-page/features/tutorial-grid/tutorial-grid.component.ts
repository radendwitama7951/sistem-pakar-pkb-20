import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TutorialService } from 'src/app/core/services/tutorial.service';

@Component({
  selector: 'app-tutorial-grid',
  templateUrl: './tutorial-grid.component.html',
  styleUrls: ['./tutorial-grid.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class TutorialGridComponent implements OnInit {
  public products: any = [
    {
      display: 'Diagnosa Diabetes',
      description:
        'Aplikasi diagnosa diabetes dapat mengurangi angka kematian akibat diabetes dengan mendeteksi gejalanya sejak dini.',
      picture: 'https://i.imgflip.com/2g3upx.jpg',
      path: 'diagnosa-diabetes',
      isFavorited: false,
    },
  ];

  public tutorial$!: Observable<any>;

  constructor(
    private router: Router,
    private _tutorialService: TutorialService
  ) {
    this._tutorialService.load();
  }

  ngOnInit(): void {
    this.tutorial$ = this._tutorialService.entities$;
  }

  goToTutorial(id: string): void {
    this.router.navigate(['tutorial', id]);
  }

  goToProduct(path: string): void {
    this.router.navigate(['app', path]);
  }
}
